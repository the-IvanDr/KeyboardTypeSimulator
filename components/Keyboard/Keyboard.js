import { useEffect, useState } from 'react';
import { Key, Tab, Backspace, Caps, Enter, Shift, Space } from './Keys.js';

export default function Keyboard({ currentKey }) {
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
                <Key char={`${!isShift ? '1' : '!'}`} finger='little' typeKey={typeKey} />
                <Key char={`${!isShift ? '2' : '"'}`} finger='little' typeKey={typeKey} />
                <Key char={`${!isShift ? '3' : '№'}`} finger='second' typeKey={typeKey} />
                <Key char={`${!isShift ? '4' : ';'}`} finger='middle' typeKey={typeKey} />
                <Key char={`${!isShift ? '5' : '%'}`} finger='index-l' typeKey={typeKey} />
                <Key char={`${!isShift ? '6' : ':'}`} finger='index-l' typeKey={typeKey} />
                <Key char={`${!isShift ? '7' : '?'}`} finger='index-r' typeKey={typeKey} />
                <Key char={`${!isShift ? '8' : '*'}`} finger='middle' typeKey={typeKey} />
                <Key char={`${!isShift ? '9' : '('}`} finger='second' typeKey={typeKey} />
                <Key char={`${!isShift ? '0' : ')'}`} finger='little' typeKey={typeKey} />
                <Key char={`${!isShift ? '-' : '_'}`} finger='little' typeKey={typeKey} />
                <Key char={`${!isShift ? '=' : '+'}`} finger='little' typeKey={typeKey} />
                <Backspace />
            </div>

            <div className='Keyboard__raw'>
                <Tab />
                <Key char='Й' finger='little' typeKey={typeKey} />
                <Key char='Ц' finger='second' typeKey={typeKey} />
                <Key char='У' finger='middle' typeKey={typeKey} />
                <Key char='К' finger='index-l' typeKey={typeKey} />
                <Key char='Е' finger='index-l' typeKey={typeKey} />
                <Key char='Н' finger='index-r' typeKey={typeKey} />
                <Key char='Г' finger='index-r' typeKey={typeKey} />
                <Key char='Ш' finger='middle' typeKey={typeKey} />
                <Key char='Щ' finger='second' typeKey={typeKey} />
                <Key char='З' finger='little' typeKey={typeKey} />
                <Key char='Х' finger='little' typeKey={typeKey} />
                <Key char='Ъ' finger='little' typeKey={typeKey} />
                <Key char='\' finger='none' typeKey={typeKey} />
            </div>

            <div className='Keyboard__raw'>
                <Caps />
                <Key char='Ф' finger='little' typeKey={typeKey} />
                <Key char='Ы' finger='second' typeKey={typeKey} />
                <Key char='В' finger='middle' typeKey={typeKey} />
                <Key char='А' finger='index-l' typeKey={typeKey} />
                <Key char='П' finger='index-l' typeKey={typeKey} />
                <Key char='Р' finger='index-r' typeKey={typeKey} />
                <Key char='О' finger='index-r' typeKey={typeKey} />
                <Key char='Л' finger='middle' typeKey={typeKey} />
                <Key char='Д' finger='second' typeKey={typeKey} />
                <Key char='Ж' finger='little' typeKey={typeKey} />
                <Key char='Э' finger='little' typeKey={typeKey} />
                <Enter />
            </div>

            <div className='Keyboard__raw'>
                <Shift left />
                <Key char='Я' finger='little' typeKey={typeKey} />
                <Key char='Ч' finger='second' typeKey={typeKey} />
                <Key char='С' finger='middle' typeKey={typeKey} />
                <Key char='М' finger='index-l' typeKey={typeKey} />
                <Key char='И' finger='index-l' typeKey={typeKey} />
                <Key char='Т' finger='index-r' typeKey={typeKey} />
                <Key char='Ь' finger='index-r' typeKey={typeKey} />
                <Key char='Б' finger='middle' typeKey={typeKey} />
                <Key char='Ю' finger='second' typeKey={typeKey} />
                <Key char='.' finger='little' typeKey={typeKey} />
                <Shift />
            </div>

            <Space typeKey={typeKey} />

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