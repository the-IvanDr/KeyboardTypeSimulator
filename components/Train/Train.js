export default function Train({ mistakeCounter, speed, before, current, after, carriage }){
    return (
        <div className='Train__lesson'>
            <div className='Train__lesson__states'>
                <div className='Train__lesson__states__mistakes'>
                    <span>{mistakeCounter}</span>
                        ошибок
                    </div>
                <div className='Train__lesson__states__speed'>
                    <span>{speed}</span>
                        зн./мин.
                    </div>
            </div>

            <div className='Train__lesson__input'>
                <span className='before'>{before}</span>
                <span className={`current ${carriage ? 'visible' : ''}`}>{current}</span>
                <span className='after'>{after}</span>
            </div>
        </div>
    )
}