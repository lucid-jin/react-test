import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // get, 2 개 이상일 경우 에러남
  const linkElement = screen.getByText(/Hello react/i);

  // query
  // screen 함수 활용가능
  // const  headingElement = queryByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();

  // null 반환함
  // expect(headingElement).toBeInTheDocument();

  const lintTest = screen.getByRole('button', { name: 'LintTest' });

  expect(lintTest).toBeEnabled();

  console.log(lintTest.textContent);

  expect(lintTest).toHaveTextContent('LintTest');
});
