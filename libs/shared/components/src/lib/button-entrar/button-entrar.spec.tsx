import React from 'react';
import { render } from '@testing-library/react-native';

import ButtonEntrar from './button-entrar';

describe('ButtonEntrar', () => {
    it('should render successfully', () => {
        const { container } = render(<ButtonEntrar />);
        expect(container).toBeTruthy();
    });
});
