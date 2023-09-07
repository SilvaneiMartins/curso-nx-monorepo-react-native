import React from 'react';
import { render } from '@testing-library/react-native';

import BotaoGenerico from './botao-generico';

describe('BotaoGenerico', () => {
    it('should render successfully', () => {
        const { container } = render(<BotaoGenerico />);
        expect(container).toBeTruthy();
    });
});
