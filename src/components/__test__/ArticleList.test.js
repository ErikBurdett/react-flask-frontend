import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from '../ArticleList';
import { render, screen } from '@testing-library/react';
import {App} from '../../App'
import "@testing-library/jest-dom/extend-expect"

const testArticle ={
    body: "Test This. ",
    date: "2021-08-31T22:51:17.469264",
    id: 63,
    title: "Test Article"


}
const AllArticles =[{
    body: "--update: Added from deployed Front End !!!",
    date: "2021-08-31T16:14:30.001860",
    id: 58,
    title: "Added from deployed Front End --update"
    },
    {
    body: "Test Test Test ",
    date: "2021-08-31T17:26:32.634169",
    id: 60,
    title: "Test Post 1"
    },
    {
    body: "Test text for testing",
    date: "2021-08-31T19:14:17.427063",
    id: 62,
    title: "yoooooo big update for the test "
    },
    {
    body: "Great job Erik.",
    date: "2021-08-31T19:14:12.587522",
    id: 61,
    title: "Hello, This is a Test for Testing "
    },
    {
    body: "Test This. ",
    date: "2021-08-31T22:51:17.469264",
    id: 63,
    title: "Test Article"
    },
    {
    body: "Helloooooo",
    date: "2021-08-31T22:52:32.538375",
    id: 64,
    title: "Test This One Too"
    }]

test("Renders correct Article", ()=> {
    render(<ArticleList/>);

});

// test("Renders All Articles", ()=>{
//     render(<ArticleList articles={AllArticles}/>)
//     const allPresent = screen.getAllByTestId("allPresent")
//     expect(allPresent).toContainElement("h2");
// })

// test("renders buttons", ()=>{
//     render(<ArticleList/>);
//     const button = screen.queryAllByTestId("button");
//     expect(button).toBeTruthy()
// })

// test("renders the body", ()=>{
//     render(<ArticleList title={testArticle}/>);
//     const body = screen.queryAllByTestId("articlebody");
//     expect(body).toBeTruthy();
//     console.log(body)
    // expect(body).toHaveAttribute([]);
    // expect(body).toBeTruthy();
    // expect(body).toHaveTextContent("Test Article");
// });
