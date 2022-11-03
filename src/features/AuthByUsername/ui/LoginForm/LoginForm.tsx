import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                className={cls.input}
                placeholder={t('Enter user name')}
            />
            <Input
                className={cls.input}
                placeholder={t('Enter password')}
            />
            <Button
                className={cls.loginBtn}
            >
                {t('sign-in')}
            </Button>
        </div>
    );
};
