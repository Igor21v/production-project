import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Исcкуственная задержка загрузки страницы для теста Suspense
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
