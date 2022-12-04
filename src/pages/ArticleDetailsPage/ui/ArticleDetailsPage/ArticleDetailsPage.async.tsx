import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Исcкуственная задержка загрузки страницы для теста Suspense
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
