import React from 'react'
import { render} from '@testing-library/react';
import App from '../../App'
import ArticleList from '../ArticleList';

it('renders without crashing, create article available', () => {
  const {getByText} = render(<App />)
  const createArticleElement = getByText("Create Article")
  expect(createArticleElement).toBeTruthy()
})

test("Renders correct Article", ()=> {
  render(<ArticleList/>);

});