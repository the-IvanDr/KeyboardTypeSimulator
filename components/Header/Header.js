import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const path = router.pathname;

    return (
        <header>
            <Link href='/'><a className="logo"><img src='../logo.png'></img></a></Link>
            <nav>
                <Link href='/learn'><a className={path === '/learn' ? 'current' : null}>Обучение</a></Link>
                <Link href='/train'><a className={path === '/train' ? 'current' : null}>Тренажер</a></Link>
                <Link href='/test'><a className={path === '/test' ? 'current' : null}>Тестирование</a></Link>
                <Link href='/custom-text'><a className={path === '/custom-text' ? 'current' : null}>Свой текст</a></Link>
            </nav>
        </header>
    )
}