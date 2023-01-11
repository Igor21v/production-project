import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getUserAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import cls from './EditableProfileCardHeader.module.scss';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';

interface EditableProfileCardHeaderProps {
    className ?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');
    const readOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (
        <HStack justify="between" max className={classNames('', {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <div>
                    {readOnly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('Edit')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Save')}
                                </Button>
                            </HStack>
                        )}
                </div>
            )}
        </HStack>
    );
});
