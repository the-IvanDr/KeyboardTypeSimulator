import Link from "next/link";

export default function Lesson({ lesson, itemCount }) {
  const LessonItems = [];

  for (let i = 1; i <= itemCount; i++) {
    LessonItems.push(
      <li key={`${lesson}-${i}`}>
        <Link href={`/train/lesson?lsn=${lesson}&item=${i}&of=${itemCount}`}>
          {i}
        </Link>
      </li>
    );
  }

  return <ul className="LessonList">{LessonItems}</ul>;
}