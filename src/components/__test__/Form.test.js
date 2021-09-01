import React from 'react';
import {render, screen, fireEvent, queryAllByRole} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from'../Form'
import App from '../../App'
import ArticleList from'../ArticleList'
import "@testing-library/jest-dom/extend-expect"


// rainforest QA

// const testArticle = {
//     body: "New Tests 1",
//     title: "New Tests"

//     }
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


// test("Renders Form Buttons", ()=> {
//     const {queryAllByRole} = render(<Form editArticle={true}/>)
//     const createFormElement = queryAllByRole("button")
//     expect(createFormElement).toBeTruthy()
// });

// // Input Field exists
// test('renders the form with input fields on updateArticle = True', ()=>{
//     render(<Form article updateArticle={true}/>)
//     const input = screen.queryAllByTestId('input', {value:/title/i});
//     // const deleteButton = screen.queryAllByRole('button', {name:/submit/i});

//     expect(input).toBe(input)
//     // expect(deleteButton).toBe(deleteButton)
// })

// API Tests
// test("render Form on ", ()=>{
//     const data={
//         title:'1',
//         body: '1'
//     }

//     const {getAllByTestId, rerender} = render(<Form articles={[{}]}/>)
//     expect(getAllByTestId(/form/i)).toHaveLength(2)
//     // ^^^ length = 2 for the two divs with articles
//     console.log(getAllByTestId(/form/i))
//     // renders test data correctly in the second return statement in ArticleList.js
//     rerender(<ArticleList article={data}/>)
//     expect(getAllByTestId(/form/i)).toHaveLength(1)


// })



// test("Renders Form Buttons", ()=> {
//     const {queryAllByRole} = render(<Form editArticle={true}/>)
//     const createFormElement = queryAllByRole("button")
//     expect(createFormElement).toBeTruthy()
// });

// test('renders without crashing, create article, and forms', () => {
//     const {getByTestId} = render(<Form insertedArticle={true} testArticle/>)
//     const createFormElement = getByTestId("form")
//     expect(createFormElement).toBeTruthy()
//     // expect(queryAllByPlaceholderText("Please Enter Title")).toBeTruthy()
//   });

// test("entering an invalid value shows an error message", () => {
//     const { getByTestId } = render(
//       <Form article updateArticle = {true} />
//       expect(getByTestId("form")).toBeInTheDocument());
//     );
//     const input = getByLabelText(/title/i);

//     console.log(input)
//     // // update prop
//     fireEvent.change(input, { target: { value: "2025550113" } });
    
//     // // test component
//     expect(getByRole("input")).toHaveValue("2025550113");
//     // // test prop updates
//     rerender(<Form title={"2025550113"} />);
//   });





// test("renders the form fields", ()=> {

// });

// test("makes a call", ()=> {

// });