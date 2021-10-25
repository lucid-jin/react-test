import Counter from './Counter';
import { fireEvent, render, screen } from '@testing-library/react';
import { CSSProperties } from 'react';

describe('Counter 컴포넌트 on mounted', () => {
  it('the counter starts at 0', function () {
    render(<Counter />);
    const counterElement = screen.getByTestId('counter');
    // 초기값으로 Counter 라는 테스트 아이디를 가진 0을 채운다
    expect(counterElement).toHaveTextContent('0');
  });

  it('minus, plus button has correct text', function () {
    render(<Counter />);

    const minusButton = screen.getByTestId('minus-button');
    const plusButton = screen.getByTestId('plus-button');

    expect(minusButton).toHaveTextContent('-');
    expect(plusButton).toHaveTextContent('+');
  });
});

describe('Counter FC events', () => {
  it('When the + button is pressed, the counter changes to 1', function () {
    render(<Counter />);

    const counterElement = screen.getByTestId('counter');
    const buttonElement = screen.getByTestId('plus-button');
    fireEvent.click(buttonElement);
    expect(counterElement).toHaveTextContent('1');
  });

  it('When the - button is pressed, the counter changes to -1', function () {
    render(<Counter />);

    const counterElement = screen.getByTestId('counter');
    const buttonElement = screen.getByTestId('minus-button');
    fireEvent.click(buttonElement);
    expect(counterElement).toHaveTextContent('-1');
  });
});

describe('Counter FC in on/off buttons', () => {
  it('on/off button has blue color', function () {
    render(<Counter />);

    const onAndOffBtnElem = screen.getByTestId('switch-button');
    const basicColor: CSSProperties = {
      backgroundColor: 'blue',
    };
    expect(onAndOffBtnElem).toHaveStyle({ ...basicColor });
    expect(onAndOffBtnElem).toHaveTextContent('on');

    fireEvent.click(onAndOffBtnElem);
    expect(onAndOffBtnElem).toHaveStyle({ ...basicColor });
    expect(onAndOffBtnElem).toHaveTextContent('off');
  });

  it('when on button clicked, Plus and Minus button disabled', () => {
    render(<Counter />);
    const onAndOffBtnElem = screen.getByTestId('switch-button');
    const minusButton = screen.getByTestId('minus-button');
    const plusButton = screen.getByTestId('plus-button');

    fireEvent.click(onAndOffBtnElem);
    expect(minusButton).toBeDisabled();
    expect(plusButton).toBeDisabled();
  });
});
