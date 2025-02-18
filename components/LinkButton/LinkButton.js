import Link from 'next/link';

export default function LinkButton({ path, children, reload }) {
    if (reload) {
        return <a href={path} className="LinkButton">{children}</a>;
    }

    return (
        <Link href={path} className="LinkButton">
            {children}
        </Link>
    );
}
