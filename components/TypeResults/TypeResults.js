import { useEffect, useRef } from 'react';
import LinkButton from '../../components/LinkButton/LinkButton';

export default function TypeResults({ results, currentPath }) {
    function repeatTest(event) {
        if (event.code === 'Space') {
            window.location.reload();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', repeatTest);
        return () => window.removeEventListener('keydown', repeatTest);
    })

    return (
        <div className='TypeResults'>
            <h4>Результат:</h4>
            <div className='TypeResults__wrapper'>
                <div className='TypeResults__speed'>
                    <div className='TypeResults__title'>Скорость</div>
                    <div className='TypeResults__data'>
                        {results.speed} <span>зн./мин</span>
                    </div>
                </div>
                <div className='TypeResults__currency'>
                    <div className='TypeResults__title'>Точность</div>
                    <div className='TypeResults__data'>
                        {results.currency}<span>%</span>
                    </div>
                </div>
            </div>
            <LinkButton path={currentPath} reload={true}>Повторить</LinkButton>
        </div>
    )
}