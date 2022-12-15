import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'shared/ui/Page/Page';

export default function MainPage() {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <Page>
            {t('Page main')}
            <Input
                placeholder="Введите текст"
                value={value}
                onChange={onChange}
            />
        </Page>
    );
}
