import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from 'shared/ui/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentForm';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentForm';

export interface AddCommentFormProps {
    className ?: string;
    onSendComment: (text: string)=>void;
}

const redusers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();
    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);
    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);
    return (
        <DynamicModuleLoader reducers={redusers}>
            <HStack justify="between" max className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Enter text of comment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler}>
                    {t('Send')}
                </Button>
            </HStack>
        </DynamicModuleLoader>

    );
});

export default AddCommentForm;
