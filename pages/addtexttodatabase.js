import { useState, useRef } from 'react';
import { MainLayout } from '../components/MainLayout/MainLayout';

export default function addTextToDB() {
    const [text, setText] = useState('');
    const errorMsgRef = useRef();
    const successMsgRef = useRef();

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    const saveTextToDB = async () => {
        const url = 'https://typingsimulator.firebaseio.com/texts.json';

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(text.trim())
            });

            if (response.ok) {
                successMsgRef.current.classList.add('show');
                setTimeout(() => successMsgRef.current.classList.remove('show'), 3000);
                setText('');
            } else {
                errorMsgRef.current.classList.add('show');
                setTimeout(() => errorMsgRef.current.classList.remove('show'), 3000);
            }
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <MainLayout>
            <div className='addTextToDb'>
                <div className='addTextToDb__success-msg' ref={successMsgRef}>Текст успешно добавлен в базу данных!</div>
                <div className='addTextToDb__error-msg' ref={errorMsgRef}>Ошибка! Не удалось подключиться к базе данных!</div>
                <textarea
                    placeholder='Вставьте текст сюда'
                    value={text}
                    onChange={onChangeHandler}
                />
                <div className='addTextToDb__words-amount'>
                    Кол-во символов: <span>{text.length}</span>
                </div>
                <button onClick={saveTextToDB}>Добавить</button>
            </div>
        </MainLayout>
    )
}