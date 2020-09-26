import Head from 'next/head';

import { MainLayout } from '../../components/MainLayout/MainLayout';
import TypeTest from '../../components/TypeTest/TypeTest';

export default function Test({ text: randomText }) {
    return (
        <MainLayout>
            <Head>
                <title>Тест скорости печати</title>
            </Head>

            <TypeTest text={randomText} />
        </MainLayout>
    )

}

export async function getServerSideProps(context) {
    const response = await fetch('https://typingsimulator.firebaseio.com/texts.json');
    const text = await response.json();

    const arr = Object.keys(text);
    let rand = Math.floor(Math.random() * (arr.length + 1));
    const randomText = text[arr[rand]];


    return {
        props: { text: randomText }
    }
}