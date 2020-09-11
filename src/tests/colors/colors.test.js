import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Colors from '../../components/colors/colors';

describe('<Colors />', () => {
    it('should display a status header', () => {
        const { getByTestId } = render(<Colors />);
        const statusHeader = getByTestId('statusHdr');
        expect(statusHeader.childNodes[0].nodeValue).toBe('Status:');
    });

    it('should get status header displaying status', () => {
        const { getByText } = render(<Colors />);
        const statusHeader = getByText('Status:');
        expect(statusHeader).toBeTruthy();
    });

    it('render a green button', () => {
        const { getByTestId } = render(<Colors />);
        const greenButton = getByTestId('greenBtn');
        expect(greenButton).toBeTruthy();
    });

    it('should display green button pressed in status when green button pressed', () => {
        const { getByTestId, getByText} = render(<Colors />);
        const greenButton = getByTestId('greenBtn');
        fireEvent.click(greenButton);
        const greenButtonPressedStatus = getByText('Status: Green Button Pressed');
        expect(greenButtonPressedStatus).toBeTruthy();
    });
});