import React from 'react';
import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ArticleList from'../ArticleList'


test("Renders ArticleList", ()=> {
    render(<ArticleList article/>)
});