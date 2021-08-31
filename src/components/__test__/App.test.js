import React from 'react'
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from '../../App'

it('renders without crashing, create article available', () => {
  const {getByText} = render(<App />)
  const createArticleElement = getByText("Create Article")
  expect(createArticleElement).toBeTruthy()
})

