import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon } from './types';

export const rtkApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (header) => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
        },
    }),
    endpoints: () => ({
    }),
});
