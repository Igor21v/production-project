import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidibarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidibarItem = memo((props: SidibarItemProps) => {
    const {
        item,
        collapsed,
    } = props;
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
