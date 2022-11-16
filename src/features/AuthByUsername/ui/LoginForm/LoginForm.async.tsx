import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // Искуственная задержка загрузки страницы для теста Suspense
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
