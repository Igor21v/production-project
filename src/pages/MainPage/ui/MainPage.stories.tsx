import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args : object) => <MainPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
