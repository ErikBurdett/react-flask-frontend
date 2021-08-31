import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from '../ArticleList';
import { render, screen } from '@testing-library/react';
import {App} from '../../App'
import "@testing-library/jest-dom/extend-expect"

test("Renders correct content", ()=> {
    render(<ArticleList/>);

});

test("renders buttons", ()=>{
    render(<ArticleList/>);
    const button = screen.queryAllByTestId("button");
    expect(button).toBeTruthy()
})

