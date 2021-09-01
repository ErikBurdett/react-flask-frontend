import React from 'react';
import {render,screen, queryByRole,} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../App'
import ArticleList from'../ArticleList'
import "@testing-library/jest-dom/extend-expect"


test("Renders ArticleList", ()=> {
    render(<ArticleList article/>)
});

test("renders when editArticle is true", ()=>{
    render(<ArticleList editArticle={true} />)
    const item = screen.queryAllByRole('button', {name:/update/i});

    expect(item).toBe(item)
    console.log(item.articles)
    // expect(item).toBeInTheDocument();

})

test('renders the button on editArticle = false', ()=>{
    render(<ArticleList editArticle={false}/>)
})