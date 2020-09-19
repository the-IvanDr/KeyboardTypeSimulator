export default function TextTyping({before, after, mistake, typeFocus, results}) {
    return (
        <div className='Test'>
            <div className='Test__wrapper'>
                <div className='Test__main-text'>
                    <span className='beforefocus'>{before}</span>
                    <span className={`typefocus ${mistake ? 'error' : null}`}>{typeFocus}</span>
                    <span className='afterfocus'>{after}</span>
                </div>
                <div className='Test__main-state'>
                    <div className='Test__main-state__speed'>
                        <div className='Test__main-state__title'><i className="fa fa-clock-o" aria-hidden="true" /> скорость</div>
                        <div className='Test__main-state__value'><span>{results.speed}</span>Зн./мин</div>
                    </div>

                    <div className='Test__main-state__accuracy'>
                        <div className='Test__main-state__title'><i className="fa fa-bullseye" aria-hidden="true" /> точность</div>
                        <div className='Test__main-state__value'><span>{results.currency}</span>%</div>
                    </div>
                </div>
            </div>

            <a href='/test'><i className="fa fa-refresh" aria-hidden="true" />заново</a>
        </div>
    )
}