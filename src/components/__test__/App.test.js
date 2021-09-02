import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react';
import App from '../../App'
import Form from'../Form'
import ArticleList from '../ArticleList';
import APIService from '../APIService';
import {InsertedArticle as mockInsertedArticle} from '../APIService';
import "@testing-library/jest-dom/extend-expect"
import fetchMock from "jest-fetch-mock";


// App Tests-------------------
// ----------------------------------
// App is working
test("Renders Flask and React App Title", () =>{
  const {queryAllByTestId} = render(<App/>)
  const appTitle = queryAllByTestId("flaskandreact")
  expect(appTitle).toBeTruthy()
})
// App renders Create Articles button and Forms
test('renders without crashing, create article, and forms', () => {
  const {getByText, queryAllByPlaceholderText} = render(<App />)
  const createArticleElement = getByText("Create Article")
  expect(createArticleElement).toBeTruthy()
  expect(queryAllByPlaceholderText("Please Enter Title")).toBeTruthy()
});

// ==========================================================

// ArticleList Tests-------------
// ---------------------------------------
// Renders all articles
test("Renders ArticleList", ()=> {
  render(<ArticleList article/>)
});

test("renders when editArticle is true", ()=>{
  render(<ArticleList editArticle={true} />)
  const item = screen.queryAllByRole('button', {name:/update/i});

  expect(item).toBe(item)
  // console.log(item.articles)
  // expect(item).toBeInTheDocument();

})
// Renders buttons
test('renders the button on editArticle = false', ()=>{
  render(<ArticleList editArticle={false}/>)
})

test("Renders ArticleList with Articles", ()=> {
  render(<ArticleList article />)
});

test("renders buttons when editArticle is true", ()=>{
  render(<ArticleList article editArticle={true}/>)
  const updateButton = screen.queryAllByRole('button', {name:/update/i});
  const deleteButton = screen.queryAllByRole('button', {name:/delete/i});

  expect(updateButton).toBe(updateButton)
  expect(deleteButton).toBe(deleteButton)
  // console.log(updateButton.data)
  // expect(item).toBeInTheDocument();

})
// Renders correct buttons
test('unrenders the button on editArticle = false', ()=>{
  render(<ArticleList editArticle={false}/>)
  const updateButton = screen.queryAllByRole('button', {name:/update/i});
  const deleteButton = screen.queryAllByRole('button', {name:/delete/i});

  expect(updateButton).toBe(updateButton)
  expect(deleteButton).toBe(deleteButton)
})

test('delete Button works', ()=>{
  render(<ArticleList editArticle={false}/>)
  const updateButton = screen.queryAllByRole('button', {name:/update/i});
  const deleteButton = screen.queryAllByRole('button', {name:/delete/i});

  expect(updateButton).toBe(updateButton)
  expect(deleteButton).toBe(deleteButton)
})

//ArticlesList api tests
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
// ==========================================================

// -------------------------
// Form Tests--------------------------
// -------------------------------------------

// Renders input field for Forms
test("Renders Input for Forms", () =>{
  const {queryAllByTestId} = render(<Form article insertedArticle={true}/>)
  const formRenders = queryAllByTestId("input")
  expect(formRenders).toBeTruthy()
})

test("Renders textarea for Forms", () =>{
  const {queryAllByTestId} = render(<Form article insertedArticle={true}/>)
  const formRenders = queryAllByTestId("form1")
  expect(formRenders).toBeTruthy()
})
// Render Tests
test("renders Form", ()=>{
  render(<Form article/>)
})

test("Renders Form when insertedArticle = true", ()=> {
  render(<Form article insertedArticle={true}/>)
});

test("renders form when insertedArticle = false", ()=>{
  render(<Form article insertedArticle={false}/>)
})

test("Renders Form when updateArticle = true", ()=> {
  render(<Form article updateArticle={true}/>)
});
test("renders form when updateArticle = false", ()=>{
  render(<Form article updateArticle={false}/>)
})

test("renders form when useEffect = true", ()=>{
  render(<Form article useEffect={true}/>)
})
// Form can be submited
test("form should have onSubmit function tied to onClick", ()=>{
  const{queryAllByTestId} = render(<Form article insertedArticle={true}/>)
  const formSubmits = queryAllByTestId("form-submit")
  expect(formSubmits).toBeTruthy()
})

//APIService Tests----------------
// =============================================
fetchMock.enableMocks();

beforeEach(()=>{
    fetch.resetMocks();

});

// GET - App specific get function for rendering All Articles on Page

test("Succesfully GETs all Articles", () => {
    fetch.mockResponse(() => useEffect().then(res => ({ body: 'ok' })))
  });

  // POST test
test("Succesfully POSTs InsertedArticle", () => {
    fetch.mockResponseOnce(()=> insertedArticle().then(res =>({body:{title: 'testing post test', body:'testing post test' }})))
});
// PUT /Update test
test("Succesfully PUTSs InsertedArticle", () => {
    fetch.mockResponseOnce(()=> upatedArticle().then(res =>({body:{title: 'testing post test', body:'testing post test' }})))
});
// DELETE
test("Succesfully Deletes article", () => {
    fetch.mockResponseOnce(()=> deleteArticle().then(res =>({body:'ok' })))
});



// Build Tests HERE ===============================


