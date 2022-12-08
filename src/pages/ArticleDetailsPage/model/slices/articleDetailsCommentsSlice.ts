import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state: StateSchema) => state.ArticleDetailsComments || commentsAdapter.getInitialState,
);

const articleDetailsCommentSlice = createSlice({
    name: 'articleDetailsCommentSlice',
    initialState: commentsAdapter.getInitialState(),
    reducers: {
    },
});
