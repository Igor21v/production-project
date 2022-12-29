import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './profileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: Boolean;
    error?: String;
    readOnly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readOnly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    };

    if (error) {
        return (
            <HStack justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('An error occurred while loading the profile')}
                    text={t('Try reload page')}
                />
            </HStack>
        );
    }
    return (
        <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center">
                    <Avatar src={data.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Your name')}
                onChange={onChangeFirstname}
                readOnly={readOnly}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Your surname')}
                onChange={onChangeLastname}
                readOnly={readOnly}
            />
            <Input
                value={data?.age}
                placeholder={t('Your age')}
                onChange={onChangeAge}
                readOnly={readOnly}
            />
            <Input
                value={data?.city}
                placeholder={t('Your city')}
                onChange={onChangeCity}
                readOnly={readOnly}
            />
            <Input
                value={data?.username}
                placeholder={t('Enter your login')}
                onChange={onChangeUsername}
                readOnly={readOnly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Enter reference to avatar')}
                onChange={onChangeAvatar}
                readOnly={readOnly}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readOnly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readOnly}
            />
        </VStack>

    );
};
