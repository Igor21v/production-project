import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Code.module.scss';

interface CodeProps {
    className ?: string;
    code: string;
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        code,
    } = props;
    const { t } = useTranslation();
    return (
        <code className={classNames(cls.Code, {}, [className])}>
            {code}
        </code>
    );
});
