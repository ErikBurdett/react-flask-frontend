import React from "react";
import {useEffect} from '../../App'
import "@testing-library/jest-dom/extend-expect"
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

beforeEach(()=>{
    fetch.resetMocks();

});

test("returns null when exception", () => {
    fetch.mockResponse(() => useEffect().then(res => ({ body: 'ok' })))});


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