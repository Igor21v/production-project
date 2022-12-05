import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { <FTName | capitalcase>, <FTName | capitalcase>Schema } from '../types/<FTName | lowercasefirstchar>';

const initialState: <FTName | sentencecase>Schema = {
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(.fulfilled, (state, action: PayloadAction<<FTName | sentencecase>>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
