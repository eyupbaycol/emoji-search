import React from 'react';
import {render, screen} from '@testing-library/react'
import {userEvent,fireEvent} from '@testing-library/user-event';
import '@testing-library/jest-dom';

import  App from '../App';

describe("Filter Test",() => {
 
    test('Filter control',() => {
        render(<App />);
        const input = screen.getByRole('input', { name: 'search' })
        fireEvent.change(input, {target: {value: '100'}})
		const emojis = screen.getAllByText("Click to copy emoji");
		expect(emojis.length).toEqual(1);
    })
})