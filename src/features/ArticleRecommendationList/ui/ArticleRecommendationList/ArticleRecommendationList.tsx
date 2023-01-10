import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { ArticleList } from 'entities/Article';
import { Text, TextSize } from 'shared/ui/Text/Text';

interface ArticleRecommendationListProps {
    className ?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('articleDetails');

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
