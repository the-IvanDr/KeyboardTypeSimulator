import Link from 'next/link';

export default function LinkButton({ path, children, reload }) {
    if (!reload) {
        return <Link href={path}><a className='LinkButton'>{children}</a></Link>;
    } else {
        return <a href={path} className='LinkButton'>{children}</a>
    }

}