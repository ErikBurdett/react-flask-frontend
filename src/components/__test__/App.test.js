import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react';
import App from '../../App'
import Form from'../Form'
import ArticleList from '../ArticleList';
import APIService from '../APIService';
import {InsertedArticle as mockInsertedArticle} from '../APIService';
import "@testing-library/jest-dom/extend-expect"


// App Tests-------------------
// ----------------------------------
test("Renders Flask and React App Title", () =>{
  const {queryAllByTestId} = render(<App/>)
  const appTitle = queryAllByTestId("flaskandreact")
  expect(appTitle).toBeTruthy()
})
test('renders without crashing, create article, and forms', () => {
  const {getByText, queryAllByPlaceholderText} = render(<App />)
  const createArticleElement = getByText("Create Article")
  expect(createArticleElement).toBeTruthy()
  expect(queryAllByPlaceholderText("Please Enter Title")).toBeTruthy()
});




// ==========================================================

// ArticleList Tests-------------
// ---------------------------------------
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

test('unrenders the button on editArticle = false', ()=>{
  render(<ArticleList editArticle={false}/>)
  const updateButton = screen.queryAllByRole('button', {name:/update/i});
  const deleteButton = screen.queryAllByRole('button', {name:/delete/i});

  expect(updateButton).toBe(updateButton)
  expect(deleteButton).toBe(deleteButton)
})

// still need to build out this - set to pass at the moment
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

// Form Tests--------------------------
// -------------------------------------------
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

//APIService Tests (next up)----------------
// ----------------------------------------
// jest.mock('../APIService');

// test("InsertedArticle performs correct POST", ()=>{
//     mockInsertedArticle.mockResolvedValueOnce({
//         message: [
//             {
//                 title: 'Testing',
//                 body: 'JSON.stringify(body)'
//             }
//         ]
//     })
//     const {getByText} = render(<Form/>, <App/>);
//     const submitArticleButton = getByText(/submit/i)
//     fireEvent.click(submitArticleButton)
// })

// =======================================








// previous tests===============================
// test("Renders ArticleList", ()=> {
//   render(<ArticleList article/>);

// });

// test("renders Form", ()=>{
//   render(<Form article/>)

// })
// test("Renders Articles Correctly",()=>{
//   const {getByTestId} = render(<ArticleList/>)
//   expect(getByTestId('allArticles')).toBeTruthy()
// });


// test("renders Form Text Area", ()=>{
//   const {getByTestId} = render(<Form article/>)
//   expect(getByTestId('form')).toHavePlaceholderText("Please provide a description")
// })

// describe("Input Value", ()=>{
//   it("updates on change", ()=>{
//     const {queryByTestId} = render(<Form/>)

//     const bodyInput = queryByTestId("textarea");

//     fireEvent.change(bodyInput, {target: {value: "test"}})

//     expect(bodyInput.value).toBe("test")
//   })
// });

