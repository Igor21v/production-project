import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            {t('Profile page')}
        </div>
    );
};

export default ProfilePage;
