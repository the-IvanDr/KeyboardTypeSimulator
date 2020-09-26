import { MainLayout } from '../components/MainLayout/MainLayout';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

export default function PageNotFound(){
    return (
        <MainLayout>
            <ErrorMessage title='Ошибка 404! Страница не найдена...' />
        </MainLayout>
    )
}
