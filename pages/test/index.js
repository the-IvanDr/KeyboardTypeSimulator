import { useState, useEffect } from 'react';
import Link from 'next/link';

import checkKey from '../../functions/checkKey';

import { MainLayout } from '../../components/MainLayout/MainLayout';
import TextTyping from '../../components/TextTyping/TextTyping';
import TypeResults from '../../components/TypeResults/TypeResults';


export default function Test({ text: randomText }) {

    const [text, setText] = useState(randomText);

    const [mistake, setMistake] = useState(false);

    const [isWin, setWin] = useState(false);
    const [isStart, setStart] = useState(true);


    const [time, setTime] = useState(0);
    const [results, setResult] = useState({
        speed: 0,
        currency: 100,
    });

    const [state, setState] = useState({
        counter: 0,
        beforeFocus: '',
        typeFocus: text.slice(0, 1),
        afterFocus: text.slice(1)
    })

    function typeHandler(event) {
        console.log(time);
        switch (checkKey(event.key, state.typeFocus)) {
            case 0:
                setMistake(true);
                return;
            case -1:
                return;
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

                return;
        }
    }

    useEffect(() => {
        if (!state.typeFocus) {
            setWin(true);
            return;
        };

        window.addEventListener('keydown', typeHandler);
        return () => window.removeEventListener('keydown', typeHandler);     
    });


    return (
        <MainLayout>

            {
                isWin
                    ? <TypeResults />
                    : <TextTyping
                        before={state.beforeFocus}
                        after={state.afterFocus}
                        mistake={mistake}
                        typeFocus={state.typeFocus}
                        results={{ speed: time, currency: 120 }}
                    />
            }

        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch('https://typingsimulator.firebaseio.com/texts/text.json');
    const text = await response.json();

    return {
        props: { text }
    }
}