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

