import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        ...otherProps
    } = props;
    /* const additional = [
        cls[theme],

    ] */
    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls.square]: square }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
