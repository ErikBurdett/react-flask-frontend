import React from "react";
import {useEffect} from '../../App';
import insertedArticle from'../Form';
import deleteArticle from '../ArticleList';
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "jest-fetch-mock";
import APIService, {UpdateArticle, InsertedArticle, DeleteArticle } from '../APIService';

fetchMock.enableMocks();

beforeEach(()=>{
    fetch.resetMocks();

});

// const testArticle = [{
//     title: 'test title',
//     body: 'test'
// }]

// App specific get function for rendering Articles on Page
test("Succesfully GETs all Articles", () => {
    fetch.mockResponse(() => useEffect().then(res => ({ body: 'ok' })))});
test("Succesfully POSTs InsertedArticle", () => {
    fetch.mockResponseOnce(()=> insertedArticle().then(res =>({body:{title: 'testing post test', body:'testing post test' }})))
});
test("Succesfully PUTSs InsertedArticle", () => {
    fetch.mockResponseOnce(()=> upatedArticle().then(res =>({body:{title: 'testing post test', body:'testing post test' }})))
});
test("Succesfully Deletes article", () => {
    fetch.mockResponseOnce(()=> deleteArticle().then(res =>({body:'ok' })))
});



// test("Succesfully POSTs InsertedArticle", () => {
//     fetch.mockResponseOnce(JSON.stringify([{title:'testing test POST request', body: '1'}]));
//     const onReponse = jest.fn();
//     const onError = jest.fn();

//     return APIService.InsertedArticle()
//         .then(onReponse)
//         .catch(onError)
//         .finally(()=>{
//             expect(onReponse).toHaveBeenCalled();
//             expect(onError).not.toHaveBeenCalled();

//             expect(onResponse.mock.calls[0][0][0]).toEqual({article});

//         })

//     })

// test("returns null when exception", () => {
//     fetch.mockReject(() => Promise.reject("API is down"));
  
//     const article = useEffect();
  
//     expect(article).toEqual(null);
//     expect(fetch).toHaveBeenCalledWith(
//         "https://flaskreact-native-test.herokuapp.com/get"
//     );
//   });

// test("finds articles", async()=>{
//     fetch.mockReponseOnce(JSON.stringify({article: [{title: 'testtitle', body: 'testbody' }] }));

//     const article = await useEffect("test", "testbody");
//     expect(article).toEqual(article)
//     expect(fetch).toHaveBeenCalledWith("https://flaskreact-native-test.herokuapp.com/get")
// })



// const getFirstArticleTitle = require('../..App');

// test('returns the title of the first article', async()=>{
//     const title = await getFirstArticleTitle();
//     expect(title).toEqual(/new tests/i);
// })

// jest.mock(APIService);

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