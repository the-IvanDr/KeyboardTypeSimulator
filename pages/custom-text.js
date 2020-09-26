import { useState } from 'react';

import Head from 'next/head';

import { MainLayout } from '../components/MainLayout/MainLayout';
import TypeTest from '../components/TypeTest/TypeTest';

export default function CustomText() {
    const [text, setText] = useState('');
    const [showTypeTest, setShowTypeTest] = useState(false)

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    const startTyping = () => {
        if(text){
            setShowTypeTest(true);
        }
    }

    return (
        <MainLayout>
            <Head>
                <title>Печатать свой текст</title>
            </Head>

            {
                showTypeTest
                    ? <TypeTest text={text} />
                    : (
                        <div className='CustomText'>
                            <textarea
                                placeholder='Введите свой текст сюда'
                                value={text}
                                onChange={onChangeHandler}
                            />
                            <button onClick={startTyping}>Печатать</button>
                        </div>
                    )

            }
        </MainLayout>
    )
}