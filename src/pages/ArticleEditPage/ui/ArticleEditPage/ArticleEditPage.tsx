import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className ?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('articleEdit');
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);
    return (
        <div className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t('Edit article with ID') + id
                : t('Creat new article')}
        </div>
    );
});

export default ArticleEditPage;
