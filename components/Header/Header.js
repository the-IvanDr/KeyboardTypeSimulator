import Link from 'next/link';

export default function Header(){
    return (
        <header>
            <Link href='/'><a className="logo"><img src='logo.png'></img></a></Link>
            <nav>
                <Link href='/learn'><a>Обучение</a></Link>
                <Link href='/train'><a>Тренажер</a></Link>
                <Link href='/test'><a>Тестирование</a></Link>
                <Link href='/custom-text'><a>Свой текст</a></Link>
            </nav>
        </header>
    )
}