import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard } from 'entities/Profile';
import { VStack } from 'shared/ui/Stack';
import { ValidateProfileError } from '../../model/types/EditableProfileCardSchema';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className ?: string;
    id?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const reducers: ReducersList = {
        profile: profileReducer,
    };
    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Name and lastname is required'),
        [ValidateProfileError.NO_DATA]: t('No data'),
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    };
    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value }));
    }, [dispatch]);
    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);
    const onChangeAge = useCallback((value?: string) => {
        if (/(^-?\d+$)|(^$)/.test(value || '')) {
            dispatch(profileActions.updateProfile({ age: Number(value || '') }));
        }
    }, [dispatch]);
    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);
    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);
    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);
    if (!id) {
        return <Text text={t('Profile not found')} />;
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="8" max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors?.length && validateErrors.map((err: ValidateProfileError) => (
                    <Text
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                        key={err}
                        data-testid="EditableProfileCard.Error"
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readOnly={readOnly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>

    );
});
