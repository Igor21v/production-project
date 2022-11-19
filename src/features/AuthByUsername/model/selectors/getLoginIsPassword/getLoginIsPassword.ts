import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginIsPassword = (state: StateSchema) => state?.loginForm?.password || '';
