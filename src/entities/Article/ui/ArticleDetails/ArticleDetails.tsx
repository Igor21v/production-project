import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const reducers = {
        articleDetails: articleDetailsReducer,
    };
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchArticleById('1'));
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                ArticleDetails1
            </div>
        </DynamicModuleLoader>
    );
});
