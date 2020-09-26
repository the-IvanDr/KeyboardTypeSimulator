export function Key({ char, finger, typeKey, current }) {
    return (
        <div className={`Key ${finger} ${typeKey === char ? 'active' : ''} 
                            ${current === char ? 'current' : ''}`}
        >
            {char}
        </div>
    )
}

export function Tab() {
    return (
        <div className='Tab'>
            TAB
        </div>
    )
}

export function Backspace() {
    return (
        <div className='Backspace'>
            <i className="fa fa-long-arrow-left" aria-hidden="true" />
        </div>
    )
}

export function Caps() {
    return (
        <div className='Caps'>
            CAPS
        </div>
    )
}

export function Enter() {
    return (
        <div className='Enter'>
            ENTER
        </div>
    )
}

export function Shift({ left }) {
    return (
        <div className={`Shift ${left ? 'left' : 'right'}`}>
            SHIFT
        </div>
    )
}

export function Space({ typeKey, current }) {
    return (
        <div className={`Space ${typeKey === ' ' ? 'active' : ''} 
                                ${current === ' ' ? 'current' : ''}`}
        />
    )
}