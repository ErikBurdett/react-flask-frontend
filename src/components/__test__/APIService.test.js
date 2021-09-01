// import React from 'react'
// import {render, screen, queryAllByRole, fireEvent, waitFor} from '@testing-library/react';
// import App from '../../App'
// import Form from'../Form'
// import ArticleList from '../ArticleList';
// import APIService from '../APIService';
// import {InsertedArticle as mockInsertedArticle} from '../APIService';
// import "@testing-library/jest-dom/extend-expect"

// jest.mock('../APIService');

// test("InsertedArticle performs correct POST", ()=>{
//     mockInsertedArticle.mockResolvedValue({
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

