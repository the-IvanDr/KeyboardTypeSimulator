import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';

import { MainLayout } from '../../components/MainLayout/MainLayout';
import Train from '../../components/Train/Train';
import TrainResult from '../../components/Train/TrainResult';
import Keyboard from '../../components/Keyboard/Keyboard';

import checkKey from '../../functions/checkKey';


export default function Lesson({ text: trainText, lesson, item, itemsCount }) {

    const router = useRouter();

    const [started, setStarted] = useState(false);
    const [finish, setFinish] = useState(false);

    const [time, setTime] = useState(null);
    const [timer, setTimer] = useState(null);

    const [carriage, setCarriage] = useState(true);

    const [mistakeCounter, setMistake] = useState(0);
    const [speed, setSpeed] = useState(0);

    const [state, setState] = useState({
        before: '',
        current: trainText ? trainText.charAt(0) : null,
        after: trainText ? trainText.substr(1) : null
    });

    // Error handling
    useEffect(() => {
        if (trainText === null) {
            router.push('/train');
        }
    });

    // Carriage blinking
    useEffect(() => {
        const timer = setInterval(() => {
            setCarriage(prev => !prev);
        }, 500);

        return () => clearInterval(timer);
    }, []);

    // Window AddEventListener on text typing
    useEffect(() => {
        if (!state.current) {
            clearInterval(timer);
            setFinish(true);
            return;
        }

        window.addEventListener('keydown', TypeTextHandler);
        return () => window.removeEventListener('keydown', TypeTextHandler);
    }, [state]);

    // Speed computing
    useEffect(() => {
        if (!started) return;
        setSpeed(Math.round(state.before.length / time * 60));
    }, [time]);

    const TypeTextHandler = (ev) => {
        switch (checkKey(ev.key, state.current)) {
            case 0:
                setMistake(prev => prev + 1);
                break;
            case -1:
                break;
            case 1:
                const before = state.before + state.current;
                const current = state.after.charAt(0);
                const after = state.after.substr(1);

                setState({
                    before,
                    current,
                    after
                });
        }
    }

    if (!started && (state.before.length || mistakeCounter >= 1)) {
        setStarted(true);

        setTimer(setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000))
    }

    return (
        <MainLayout>
            <Head>
                <title>Упражнение {item} Урок {lesson} </title>
            </Head>

            {
                finish
                    ? <TrainResult
                        mistakes={mistakeCounter}
                        speed={speed}
                        lesson={lesson}
                        item={item}
                        itemsCount={itemsCount}
                    />
                    : (
                        <>
                            <Train
                                mistakeCounter={mistakeCounter}
                                speed={speed}
                                before={state.before}
                                current={state.current}
                                after={state.after}
                                carriage={carriage}
                            />
                            <Keyboard current={state.current.toUpperCase()} />
                        </>
                    )
            }

        </MainLayout>
    )
}



export async function getServerSideProps(context) {
    const { lsn, item, of } = context.query;

    const response = await fetch(`https://typingsimulator.firebaseio.com/lessons/${lsn - 1}/${item - 1}.json`);
    const text = await response.json();

    return {
        props: { text, lesson: +lsn, item: +item, itemsCount: +of }
    }
}