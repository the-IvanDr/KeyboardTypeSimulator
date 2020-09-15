import { useState, useEffect } from 'react';
import Link from 'next/link';

import { MainLayout } from '../../components/MainLayout/MainLayout';


export default function Test({ text:randomText }) {
    const [text, setText] = useState(randomText);

    const [state, setState] = useState({
        counter: 0,
        beforeFocus: '',
        typeFocus: text.slice(0, 1),
        afterFocus: text.slice(1)
    })

    function typeHandler(event) {
        const counter = state.counter + 1;
        const beforeFocus = state.beforeFocus + state.typeFocus + '';
        const typeFocus = state.afterFocus[0];
        const afterFocus = text.slice(counter+1);

        setState({
            counter,
            beforeFocus,
            typeFocus,
            afterFocus
        })
    }

    useEffect(() => { // Перебацать
        if(!state.typeFocus) return;

        window.addEventListener('keydown', typeHandler);
        return () => window.removeEventListener('keydown', typeHandler);
    }, [state.counter, state.beforeFocus, state.typeFocus, state.afterFocus]);

    return (
        <MainLayout>
            <div className='Test'>
                <div className='Test__wrapper'>
                    <div className='Test__main-text'>
                        <span className='beforefocus'>{state.beforeFocus}</span>
                        <span className='typefocus'>{state.typeFocus}</span>
                        <span className='afterfocus'>{state.afterFocus}</span>
                    </div>
                    <div className='Test__main-state'>
                        <div className='Test__main-state__speed'>
                            <div className='Test__main-state__title'><i className="fa fa-clock-o" aria-hidden="true" /> скорость</div>
                            <div className='Test__main-state__value'><span>100</span>Зн./мин</div>
                        </div>

                        <div className='Test__main-state__accuracy'>
                            <div className='Test__main-state__title'><i className="fa fa-bullseye" aria-hidden="true" /> точность</div>
                            <div className='Test__main-state__value'><span>{state.counter}</span>%</div>
                        </div>
                    </div>
                </div>

                <a href='/test'><i className="fa fa-refresh" aria-hidden="true" />заново</a>
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    let text = 'С ростом популярности Интернета проявились и негативные аспекты его применения. В частности, некоторые люди увлекаются виртуальным пространством и начинают предпочитать Интернет реальности. Интернет-зависимость многие считают сходной с химической зависимостью вроде курения или наркомании. По данным различных исследований, интернет-зависимыми сегодня являются около 10 процентов всех пользователей.';

    return {
        props: { text }
    }
}