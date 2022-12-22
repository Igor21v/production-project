import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Исcкуственная задержка загрузки страницы для теста Suspense
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
