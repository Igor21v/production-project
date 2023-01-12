import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
    AutoSizer, List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) => (
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
        ))
);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        target,
        view = ArticleView.SMALL,
        virtualized = true,
    } = props;
    const { t } = useTranslation();
    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);
    const rowRender = ({
        index, isScrolling, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={articles[i].id}
                />,
            );
        }
        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Articles not found')} />
            </div>
        );
    }
    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width, height, registerChild, onChildScroll, isScrolling, scrollTop,
            }) => (
                <div
                    className={classNames('', {}, [className, cls[view]])}
                    ref={registerChild}
                >
                    {virtualized
                        ? (
                            <List
                                height={height ?? 700}
                                rowCount={rowCount}
                                rowHeight={isBig ? 700 : 330}
                                rowRenderer={rowRender}
                                width={width ? width - 80 : 700}
                                autoHeight
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (
                            articles.map((item) => (
                                <ArticleListItem
                                    article={item}
                                    view={view}
                                    className={cls.card}
                                    target={target}
                                    key={item.id}
                                />
                            ))
                        )}

                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
