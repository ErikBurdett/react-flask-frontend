import React from 'react'
import {render, screen, queryAllByRole, fireEvent} from '@testing-library/react';
import App from '../../App'
import Form from'../Form'
import ArticleList from '../ArticleList';
import "@testing-library/jest-dom/extend-expect"

test('renders without crashing, create article, and forms', () => {
  const {getByText, queryAllByPlaceholderText} = render(<App />)
  const createArticleElement = getByText("Create Article")
  expect(createArticleElement).toBeTruthy()
  expect(queryAllByPlaceholderText("Please Enter Title")).toBeTruthy()
});


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

