import React from 'react';
import {render, screen, fireEvent, queryAllByRole} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from'../Form'
import App from '../../App'
import ArticleList from'../ArticleList'
import "@testing-library/jest-dom/extend-expect"

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

// Form Validation Tests (Next)