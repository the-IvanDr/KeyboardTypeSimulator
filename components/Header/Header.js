import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const path = router.pathname;

    return (
        <header>
            <Link href="/" className="logo">
                <img src="/logo.png" alt="Логотип" />
            </Link>
            
            <nav>
                <Link href="/learn" className={path === '/learn' ? 'current' : ''}>Обучение</Link>
                <Link href="/train" className={path === '/train' ? 'current' : ''}>Тренажер</Link>
                <Link href="/test" className={path === '/test' ? 'current' : ''}>Тестирование</Link>
                <Link href="/custom-text" className={path === '/custom-text' ? 'current' : ''}>Свой текст</Link>
            </nav>
        </header>
    );
}
