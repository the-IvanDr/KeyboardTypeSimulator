import { useState } from 'react';
import Head from 'next/head';
import { MainLayout } from '../components/MainLayout/MainLayout';
import TypeTest from '../components/TypeTest/TypeTest';

export default function CustomText() {
    const [text, setText] = useState('');
    const [showTypeTest, setShowTypeTest] = useState(false);

    const onChangeHandler = (event) => {
        setText(event.target.value);
    };

    const startTyping = () => {
        if (text) {
            setShowTypeTest(true);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

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
                                onKeyDown={handleKeyDown}  
                            />
                            <button onClick={startTyping}>Печатать</button>
                        </div>
                    )
            }
        </MainLayout>
    );
}