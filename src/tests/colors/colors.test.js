import React from 'react';
import { render } from '@testing-library/react';
import Colors from '../../components/colors/colors';

describe('<Colors />', () => {
    it('render a green button', () => {
        const { getByTestId } = render(<Colors />)
        const greenButton = getByTestId('greenBtn');
        expect(greenButton).toBeTruthy();
    });
});