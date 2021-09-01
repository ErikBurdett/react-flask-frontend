import React from 'react';
import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from'../Form'

test("Renders ArticleList", ()=> {
    render(<Form article/>)
});

// test("renders the form fields", ()=> {

// });

// test("makes a call", ()=> {

// });