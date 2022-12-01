import { LoginSchema } from '../types/loginSchema';
import { profileActions, profileReducer } from './profileSlice';

describe('loginSlice.test', () => {
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(profileReducer(state as LoginSchema, loginActions.setUsername('456rty'))).toEqual({ username: '456rty' });
    });
    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(profileReducer(state as LoginSchema, loginActions.setPassword('456rty'))).toEqual({ password: '456rty' });
    });
});
