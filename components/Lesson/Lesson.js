import Link from 'next/link';

export default function Lesson({ lesson, itemCount }) {

    const LessonItems = [];

    for (let i = 1; i <= itemCount; i++) {
        LessonItems.push(
            <Link
                key={`${lesson}-${i}`}
                href={`/train/lesson?lsn=${lesson}&item=${i}&of=${itemCount}`}
            >
                <li><a>{i}</a></li>
            </Link>
        );
    }

    return (
        <ul className='LessonList'>
            { LessonItems}
        </ul>
    )
}