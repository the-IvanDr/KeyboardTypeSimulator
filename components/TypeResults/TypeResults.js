import LinkButton from '../../components/LinkButton/LinkButton';

export default function TypeResults() {
    return (
        <div className='TypeResults'>
            <h4>Результат:</h4>
            <div className='TypeResults__wrapper'>
                <div className='TypeResults__speed'>
                    <div className='TypeResults__title'>Скорость</div>
                    <div className='TypeResults__data'>
                        398 <span>зн./мин</span>
                    </div>
                </div>
                <div className='TypeResults__currency'>
                    <div className='TypeResults__title'>Точность</div>
                    <div className='TypeResults__data'>
                        96<span>%</span>
                    </div>
                </div>
            </div>
            <LinkButton path='/test' reload={true}>Повторить</LinkButton>
        </div>
    )
}