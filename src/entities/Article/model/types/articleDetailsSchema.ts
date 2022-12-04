import { Article } from './article';

export interface AticleDetailsSchema {
    isLoading: Boolean;
    error?: string;
    data?: Article;
}
