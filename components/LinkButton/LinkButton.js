import Link from 'next/link';

export default function LinkButton({ path, children }) {
    return (
        <Link href={path}><a className='LinkButton'>{children}</a></Link>
    )
}