import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Исcкуственная задержка загрузки страницы для теста Suspense
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
