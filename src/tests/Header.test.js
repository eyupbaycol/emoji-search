import React from 'react';
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import  Header from '../Header.js';

describe("Header Test",() => {

    test('Header title Control',() => {
        render(<Header />);
        const title = screen.getByText("Emoji Search")
        expect(title).toBeInTheDocument()
    })
})