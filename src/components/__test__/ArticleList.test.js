import React from 'react';
import {render,screen, rerender, queryByRole,} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../App'
import ArticleList from'../ArticleList'
import "@testing-library/jest-dom/extend-expect"

// Render Tests
test("Renders ArticleList", ()=> {
    render(<ArticleList/>)
});

test("Renders ArticleList with Articles", ()=> {
    render(<ArticleList article />)
});
// Renders buttons
test("renders buttons when editArticle is true", ()=>{
    render(<ArticleList article editArticle={true}/>)
    const updateButton = screen.queryAllByRole('button', {name:/update/i});
    const deleteButton = screen.queryAllByRole('button', {name:/delete/i});

    expect(updateButton).toBe(updateButton)
    expect(deleteButton).toBe(deleteButton)
    // console.log(updateButton.data)
    // expect(item).toBeInTheDocument();

})
// renders correct buttons
test('unrenders the button on editArticle = false', ()=>{
    render(<ArticleList editArticle={false}/>)
    const updateButton = screen.queryAllByRole('button', {name:/update/i});
    const deleteButton = screen.queryAllByRole('button', {name:/delete/i});

    expect(updateButton).toBe(updateButton)
    expect(deleteButton).toBe(deleteButton)
})


test('delete button renders correctly, and again on editArticle = false,', ()=>{
    render(<ArticleList editArticle={false}/>)
    const updateButton = screen.queryAllByRole('button', {name:/update/i});
    const deleteButton = screen.queryAllByRole('button', {name:/delete/i});

    expect(updateButton).toBe(updateButton)
    expect(deleteButton).toBe(deleteButton)
})


//api tests
// renders articles correctly given data
test("renders articles from API", ()=>{
    const data={
        title:'1',
        body: '1'
    }

    const {getAllByTestId, rerender} = render(<ArticleList articles={[{}]}/>)
    expect(getAllByTestId(/articles/i)).toHaveLength(2)
    // ^^^ length = 2 for the two divs with articles
    // console.log(getAllByTestId(/articles/i))
    // renders test data correctly in the second return statement in ArticleList.js
    rerender(<ArticleList article={data}/>)
    expect(getAllByTestId(/articles/i)).toHaveLength(1)


})

// Build Tests HERE ===============================