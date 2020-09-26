import { useEffect, useState } from 'react';
import { Key, Tab, Backspace, Caps, Enter, Shift, Space } from './Keys.js';

export default function Keyboard({ current }) {
    const [typeKey, setTypeKey] = useState('');
    const [timer, setTimer] = useState(null);
    const [isShift, setShift] = useState(false);

    const typingHandler = event => {
        if (timer) {
            clearTimeout(timer);
        }

        if (event.key === 'Shift') {
            setShift(true);
        } else {
            setTypeKey(event.key.toUpperCase());
            setTimer(setTimeout(() => setTypeKey(''), 100));
        }
    }

    const shiftUp = event => {
        if (event.key === 'Shift') {
            setShift(false);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', typingHandler);
        window.addEventListener('keyup', shiftUp);
        return () => {
            window.removeEventListener('keydown', typingHandler);
            window.removeEventListener('keyup', shiftUp);
        }
    });

    return (
        <div className='Keyboard'>
            <div className='Keyboard__raw'>
                <Key char='Ё' finger='none' typeKey={typeKey} />
                <Key char={`${!isShift ? '1' : '!'}`} finger='little' typeKey={typeKey} current={current} />
                <Key char={`${!isShift ? '2' : '"'}`} finger='little' typeKey={typeKey} current={current} />
                <Key char={`${!isShift ? '3' : '№'}`} finger='second' typeKey={typeKey} current={current} />
                <Key char={`${!isShift ? '4' : ';'}`} finger='middle' typeKey={typeKey} current={current} />
                <Key char={`${!isShift ? '5' : '%'}`} finger='index-l' typeKey={typeKey} current={current} />
                <Key char={`${!isShift ? '6' : ':'}`} finger='index-l' typeKey={typeKey} current={current} />
                <Key char={`${!isShift ? '7' : '?'}`} finger='index-r' typeKey={typeKey} current={current} />
                <Key char={`${!isShift ? '8' : '*'}`} finger='middle' typeKey={typeKey} current={current} />
                <Key char={`${!isShift ? '9' : '('}`} finger='second' typeKey={typeKey} current={current} />
                <Key char={`${!isShift ? '0' : ')'}`} finger='little' typeKey={typeKey} current={current} />
                <Key char={`${!isShift ? '-' : '_'}`} finger='little' typeKey={typeKey} current={current} />
                <Key char={`${!isShift ? '=' : '+'}`} finger='little' typeKey={typeKey} current={current} />
                <Backspace />
            </div>

            <div className='Keyboard__raw'>
                <Tab />
                <Key char='Й' finger='little' typeKey={typeKey} current={current} />
                <Key char='Ц' finger='second' typeKey={typeKey} current={current} />
                <Key char='У' finger='middle' typeKey={typeKey} current={current} />
                <Key char='К' finger='index-l' typeKey={typeKey} current={current} />
                <Key char='Е' finger='index-l' typeKey={typeKey} current={current} />
                <Key char='Н' finger='index-r' typeKey={typeKey} current={current} />
                <Key char='Г' finger='index-r' typeKey={typeKey} current={current} />
                <Key char='Ш' finger='middle' typeKey={typeKey} current={current} />
                <Key char='Щ' finger='second' typeKey={typeKey} current={current} />
                <Key char='З' finger='little' typeKey={typeKey} current={current} />
                <Key char='Х' finger='little' typeKey={typeKey} current={current} />
                <Key char='Ъ' finger='little' typeKey={typeKey} current={current} />
                <Key char='\' finger='none' typeKey={typeKey} current={current} />
            </div>

            <div className='Keyboard__raw'>
                <Caps />
                <Key char='Ф' finger='little' typeKey={typeKey} current={current} />
                <Key char='Ы' finger='second' typeKey={typeKey} current={current} />
                <Key char='В' finger='middle' typeKey={typeKey} current={current} />
                <Key char='А' finger='index-l' typeKey={typeKey} current={current} />
                <Key char='П' finger='index-l' typeKey={typeKey} current={current} />
                <Key char='Р' finger='index-r' typeKey={typeKey} current={current} />
                <Key char='О' finger='index-r' typeKey={typeKey} current={current} />
                <Key char='Л' finger='middle' typeKey={typeKey} current={current} />
                <Key char='Д' finger='second' typeKey={typeKey} current={current} />
                <Key char='Ж' finger='little' typeKey={typeKey} current={current} />
                <Key char='Э' finger='little' typeKey={typeKey} current={current} />
                <Enter />
            </div>

            <div className='Keyboard__raw'>
                <Shift left />
                <Key char='Я' finger='little' typeKey={typeKey} current={current} />
                <Key char='Ч' finger='second' typeKey={typeKey} current={current} />
                <Key char='С' finger='middle' typeKey={typeKey} current={current} />
                <Key char='М' finger='index-l' typeKey={typeKey} current={current} />
                <Key char='И' finger='index-l' typeKey={typeKey} current={current} />
                <Key char='Т' finger='index-r' typeKey={typeKey} current={current} />
                <Key char='Ь' finger='index-r' typeKey={typeKey} current={current} />
                <Key char='Б' finger='middle' typeKey={typeKey} current={current} />
                <Key char='Ю' finger='second' typeKey={typeKey} current={current} />
                <Key char='.' finger='little' typeKey={typeKey} current={current} />
                <Shift />
            </div>

            <Space typeKey={typeKey} current={current} />

            <div className='help'>
                <span className='help__little'>мизинец</span>
                <span className='help__second'>безымянный</span>
                <span className='help__middle'>средний</span>
                <span className='help__index'>
                    указательный
                </span>
            </div>
        </div>
    )
}