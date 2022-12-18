import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/UI';

const initialState: UISchema = {
    scroll: {},
};

export const uISlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string; position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: uIActions } = uISlice;
export const { reducer: uIReducer } = uISlice;
