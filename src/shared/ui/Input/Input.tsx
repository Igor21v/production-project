import React, { InputHTMLAttributes, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        onChange,
        ...otherProps
    } = props;
    const [isFocused, setIsFocuset] = useState(false);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const onBlur = () => {
        setIsFocuset(false);
    };
    const onFocus = () => {
        setIsFocuset(true);
    };
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    type={type}
                    onChange={onChangeHandler}
                    value={value}
                    {...otherProps}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                {isFocused && (
                    <span className={cls.caret} />
                )}
            </div>
        </div>
    );
});
