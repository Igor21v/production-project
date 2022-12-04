import React from 'react';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RouterPath.main,
        text: 'Main',
        Icon: MainIcon,
    },
    {
        path: RouterPath.about,
        text: 'About',
        Icon: AboutIcon,
    },
    {
        path: RouterPath.profile,
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RouterPath.articles,
        text: 'Articles',
        Icon: ArticleIcon,
        authOnly: true,
    },
];
