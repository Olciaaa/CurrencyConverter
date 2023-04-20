import { fireEvent, render, screen } from '@testing-library/react'
import Form from '../components/Form';

let rate:number = 10;

it('1. Form appears', () => {
  render(
    <Form rate={rate}/>
  );
  
  expect(screen.getByTestId('convertingForm')).toBeTruthy()
})

it('2. FormInputs were rendered properly', () => {
  render(
    <Form rate={rate}/>
  )

  const inputPLN = screen.getByTestId('convertingForm').getElementsByTagName('input')[0]
  const inputGBP = screen.getByTestId('convertingForm').getElementsByTagName('input')[1]
  expect(inputPLN.value).toBe("");
  expect(inputGBP.value).toBe("");
})

it('3. Entered PLN value', () => {
  render(
    <Form rate={rate}/>
  )

  const inputPLN = screen.getByTestId('convertingForm').getElementsByTagName('input')[0]
  const inputGBP = screen.getByTestId('convertingForm').getElementsByTagName('input')[1]

  fireEvent.change(inputPLN, { target: { value: '123' } })

  expect(inputPLN.value).toBe("123");
  expect(inputGBP.value).toBe("12.30");
})

it('4. Entered GBP value', () => {
  render(
    <Form rate={rate}/>
  )

  const inputPLN = screen.getByTestId('convertingForm').getElementsByTagName('input')[0]
  const inputGBP = screen.getByTestId('convertingForm').getElementsByTagName('input')[1]

  fireEvent.change(inputGBP, { target: { value: '123' } })

  expect(inputGBP.value).toBe("123");
  expect(inputPLN.value).toBe("1230.00");
})