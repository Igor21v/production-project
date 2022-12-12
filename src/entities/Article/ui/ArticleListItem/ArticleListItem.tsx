import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListItemProps {
    className ?: string;
    article : Article;
    view : ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleListItem, {}, [className])}>
            {article.title}
        </div>
    );
});
