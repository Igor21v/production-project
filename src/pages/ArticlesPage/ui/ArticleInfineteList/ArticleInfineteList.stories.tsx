import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleInfineteList } from './ArticleInfineteList';

export default {
    title: 'pages/ArticleInfineteList',
    component: ArticleInfineteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfineteList>;

const Template: ComponentStory<typeof ArticleInfineteList> = (args) => <ArticleInfineteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
