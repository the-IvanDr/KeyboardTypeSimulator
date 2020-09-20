import Head from 'next/head';
import Link from 'next/link';

import { MainLayout } from '../components/MainLayout/MainLayout';
import LinkButton from '../components/LinkButton/LinkButton';

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <title>KTS | Welcome</title>
            </Head>

            <article>
                <section>
                    <div className='main-image'>
                        <img src='img/method.jpg' />
                    </div>
                    <h3>Печатай быстрее</h3>
                    <p>Благодаря клавиатурному тренажеру вы научитесь методу <span className='highlight'>слепой печати</span> и будете использовать при наборе текста <span className='highlight'>все 10 пальцев</span>.</p>
                    <LinkButton path='/first-step' reload={false}>Начать печатать</LinkButton>
                </section>
                <div className='section-wrapper'>
                    <section>
                        <h4>Научиться печатать вслепую</h4>
                        <p>Ускорь прогресс обучения слепой печати и развивай ценные навыки набора текста!</p>
                        <Link href='/learn'>
                            <a>
                                Узнай, как печатать вслепую <i className="fa fa-angle-right" aria-hidden="true" />
                            </a>
                        </Link>
                    </section>
                    <section>
                        <h4>Пройди тест на скорость печати</h4>
                        <p>Узнай свою скорость печати и удиви приятелей своим результатом.</p>
                        <Link href='/test'>
                            <a>
                                Перейти к тесту скорости печати <i className="fa fa-angle-right" aria-hidden="true" />
                            </a>
                        </Link>
                    </section>
                </div>
            </article>
        </MainLayout>
    )
}