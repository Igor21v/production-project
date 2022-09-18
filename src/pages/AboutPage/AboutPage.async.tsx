import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    //Искуственная задержка загрузки страницы для теста Suspense
    setTimeout(()=> resolve(import('./AboutPage')),1500)
}));