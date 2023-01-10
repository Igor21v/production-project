import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { ArticleList } from 'entities/Article';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { rtkApi } from 'shared/api/rtkApi';
import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle';

interface ArticleRecommendationListProps {
    className ?: string;
}

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('articleDetails');
    const { isLoading, data } = useArticleRecommendationsList(3);
    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('We recommend')} />
            <ArticleList
                articles={[]}
                target="_blank"
            />
        </VStack>
    );
});
