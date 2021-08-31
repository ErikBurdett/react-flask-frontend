import React from 'react';
import ArticleList from '../ArticleList';
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

test("articles render with correct text", ()=>{
    const component = render(<ArticleList/>);
    const articlesElement = component.getByTestId("articles");
    

    expect(articlesElement.textContent).toBe("Welcome To The Test App")
    console.log(articlesElement.textContent)
})