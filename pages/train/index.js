import Head from 'next/head';

import { MainLayout } from '../../components/MainLayout/MainLayout';
import Lesson from '../../components/Lesson/Lesson';
import Spoiler from '../../components/Spoiler/Spoiler';

export default function Train() {
    return (
        <MainLayout>
            <Head>
                <title>KTS | Тренировка</title>
            </Head>

            <div className='Train'>
                <h2>Уроки</h2>
                <Spoiler title='Клавиши основной позиции'>
                    <Lesson lesson={1} itemCount={9} />
                </Spoiler>
                <Spoiler title='Клавиши указательных пальцев'>
                    <Lesson lesson={2} itemCount={13} />
                </Spoiler>
                <Spoiler title='Клавиши средних и безымянных пальцев'>
                    <Lesson lesson={3} itemCount={12} />
                </Spoiler>
                <Spoiler title='Клавиши мизинцев'>
                    <Lesson lesson={4} itemCount={10} />
                </Spoiler>
                <Spoiler title='Печать повторяющегося текста 1'>
                    <Lesson lesson={5} itemCount={17} />
                </Spoiler>
                <Spoiler title='Печать повторяющегося текста 2'>
                    <Lesson lesson={6} itemCount={17} />
                </Spoiler>
                <Spoiler title='Печать повторяющегося текста 3'>
                    <Lesson lesson={7} itemCount={17} />
                </Spoiler>
                <Spoiler title='Печать повторяющегося текста 4'>
                    <Lesson lesson={8} itemCount={17} />
                </Spoiler>
                <Spoiler title='Цифры и знаки препинания'>
                    <Lesson lesson={9} itemCount={15} />
                </Spoiler>
                <Spoiler title='Четвертый ряд - верхний регистр'>
                    <Lesson lesson={10} itemCount={5} />
                </Spoiler>
                <Spoiler title='Цифры и знаки препинания 2'>
                    <Lesson lesson={11} itemCount={22} />
                </Spoiler>
            </div>
        </MainLayout>
    )
}