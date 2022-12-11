import { lazy } from 'react';

export const AddCommentFormAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Искуственная задержка загрузки страницы для теста Suspense
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
