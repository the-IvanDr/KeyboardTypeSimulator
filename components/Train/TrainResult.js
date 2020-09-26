import { useRef, useEffect } from 'react';
import Link from 'next/link';

const MAX_MISTAKE_COUNT = 3;
const LESSONS_AMOUNT_AT_ALL = 11;
const GOOD_SPEED_VALUE_MIN = 100;

export default function TrainResult({ mistakes, speed, lesson, item, itemsCount }) {
    const btnRepeatRef = useRef();
    const btnNextRef = useRef();

    useEffect(() => {
        window.addEventListener('keydown', spacebarPressHandler);
        return () => window.removeEventListener('keydown', spacebarPressHandler);
    })

    const spacebarPressHandler = ev => {
        if (ev.code !== 'Space') return;
        if (mistakes >= MAX_MISTAKE_COUNT) {
            btnRepeatRef.current.click();
        } else {
            btnNextRef.current.click();
        }
    }

    let message = 'Так держать!';
    if (speed < GOOD_SPEED_VALUE_MIN) {
        message = 'Возможно, стоит попробовать еще раз...';
    }
    if (mistakes >= MAX_MISTAKE_COUNT) {
        message = 'Слишком много ошибок. Стоит повторить.';
    }

    let nextHref = `/train/lesson?lsn=${lesson}&item=${item + 1}&of=${itemsCount}`;
    if (item >= itemsCount) {
        if (lesson >= LESSONS_AMOUNT_AT_ALL) {
            nextHref = `/train`;
        } else {
            nextHref = `/train/lesson?lsn=${lesson + 1}&item=${1}&of=${itemsCount}`;
        }
    }

    return (
        <div className='Train__result'>
            <h4>Результат:</h4>
            <p>{message}</p>
            <div className='flex-wrapper'>
                <div className='Train__result__mistakes'>
                    <span>{mistakes}</span>
                    ошибок
                </div>
                <div className='Train__result__speed'>
                    <span>{speed}</span>
                    зн./мин.
                </div>
            </div>

            <div className='flex-wrapper'>
                <a
                    ref={btnRepeatRef}
                    href={`/train/lesson?lsn=${lesson}&item=${item}&of=${itemsCount}`}
                > Повторить</a>
                <a
                    ref={btnNextRef}
                    href={nextHref} className={`${mistakes >= MAX_MISTAKE_COUNT ? 'freeze' : ''}`}
                >Дальше</a>
            </div>
        </div>
    )
}