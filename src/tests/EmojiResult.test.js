import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import EmojiResults from '../EmojiResults';
describe("Emoji List Test", () => {
    let copy;
    const items = [
        {
            "title": "test1",
            "symbol": "💯",
            "keywords":
                "hundred points symbol symbol wow wow win win perfect perfect parties parties"
        },
        {
            "title": "test2",
            "symbol": "🔢",
            "keywords": "input symbol for numbers symbol"
        },
    ]
    beforeEach(() => {
        render(<EmojiResults emojiData={items} />);
    })
    test("Render Emoji List", () => {
        const title = screen.getAllByText(/test/i)
        expect(title.length).toEqual(2);
    })

    // test("Click List Item", async() => {
    //     const item = screen.getAllByText(/test/i);
    //         setTimeout(() => {
    //             navigator.clipboard.readText().then(clipText => {
    //                 copy = clipText
    //             })},1000)
            
    //         userEvent.click(item[0].parentElement)
    //         expect(copy).toBe("💯")
    // })
    
})