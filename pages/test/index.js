import { useState, useEffect } from 'react';
import Link from 'next/link';

import checkKey from '../../functions/checkKey';

import { MainLayout } from '../../components/MainLayout/MainLayout';
import TextTyping from '../../components/TextTyping/TextTyping';
import TypeResults from '../../components/TypeResults/TypeResults';


export default function Test({ text: randomText }) {

    const [text, setText] = useState(randomText);

    const [mistake, setMistake] = useState(false);
    const [mistakeCount, setMistakeCount] = useState(0);

    const [isWin, setWin] = useState(false);
    const [isStart, setStart] = useState(false);

    const [timer, setTimer] = useState(null);
    const [time, setTime] = useState(0);
    const [results, setResults] = useState({
        speed: 0,
        currency: 100,
    });

    const [state, setState] = useState({
        counter: 0,
        beforeFocus: '',
        typeFocus: text.slice(0, 1),
        afterFocus: text.slice(1)
    })

    useEffect(() => {
        if (!state.typeFocus) {
            setWin(true);
            clearInterval(timer);
            return;
        };

        window.addEventListener('keydown', typeHandler);
        return () => window.removeEventListener('keydown', typeHandler);
    });

    useEffect(() => {
        if (!state.counter) return;
        setResults(prev => ({ ...prev, speed: Math.round(state.counter / time * 60) }))
    }, [time]);

    useEffect(()=>{
        if(mistake){
            setMistakeCount(prev => prev+1);
            setResults(prev => ({...prev, currency: (prev.currency - (mistakeCount+1 * 100)/text.length).toFixed(1)}))
        }
    }, [mistake])



    function typeHandler(event) {
        switch (checkKey(event.key, state.typeFocus)) {
            case 0:
                setMistake(true);
                break;
            case -1:
                break;
            case 1:
                setMistake(false);

                const counter = state.counter + 1;
                const beforeFocus = state.beforeFocus + state.typeFocus + '';
                const typeFocus = state.afterFocus[0];
                const afterFocus = text.slice(counter + 1);

                setState({
                    counter,
                    beforeFocus,
                    typeFocus,
                    afterFocus
                })
        }
    }

    if (!isStart && (state.counter === 1 || mistakeCount === 1)) {
        setStart(true);

        setTimer(setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000));
    }
    

    return (
        <MainLayout>

            {
                isWin
                    ? <TypeResults results={results} />
                    : <TextTyping
                        before={state.beforeFocus}
                        after={state.afterFocus}
                        mistake={mistake}
                        typeFocus={state.typeFocus}
                        results={results}
                    />
            }

        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch('https://typingsimulator.firebaseio.com/texts.json');
    const text = await response.json();

    const arr = Object.keys(text);
    let rand = Math.floor(Math.random() * (arr.length + 1));
    const randomText = text[arr[rand]];


    return {
        props: { text: randomText }
    }
}