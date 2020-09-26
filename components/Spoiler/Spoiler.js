import { useState } from 'react';

export default function Spoiler({ children, title }) {
    const [isOpen, setOpen] = useState(false);
    
    const contentClasses = ['Spoiler__content'];
    const titleClasses = ['Spoiler__title'];
    if(isOpen){
        contentClasses.push('open');
        titleClasses.push('open');
    }

    const openHandler = () => {
        setOpen(!isOpen);
    }

    return (
        <div className='Spoiler'>
            <div className={titleClasses.join(' ')} onClick={openHandler} onMouseDown={ev => ev.preventDefault()}>
                <i className="fa fa-caret-right" aria-hidden="true" />
                {title}
            </div>
            <div className={contentClasses.join(' ')}>
                {children}
            </div>
        </div>
    )
}