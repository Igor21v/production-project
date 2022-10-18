import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('in the document', () => {
        render(<Sidebar />);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
