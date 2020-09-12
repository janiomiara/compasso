import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputSearch from '../components/inputSearch'
import Provider from '../providers'

const searchSut = () => {
  const { getByLabelText, findByTestId } = render(
    <Provider>
      <InputSearch />
    </Provider>
  )
  const input = getByLabelText('Search User')
  return { input, findByTestId }
}

test('Testing  initial state search button desabled ', async () => {
  const { input, findByTestId } = searchSut()
  const buttonSubmit = await findByTestId('submit')
  expect(buttonSubmit.disabled).toEqual(true)
  expect(input.value).toBe('')
})

test('Testing initial state search with props ', async () => {
  const { input, findByTestId } = searchSut()
  fireEvent.change(input, { target: { value: 'janiomiara' } })
  const buttonSubmit = await findByTestId('submit')
  expect(buttonSubmit.disabled).toEqual(false)
  expect(input.value).toBe('janiomiara')
})

test('Testing initial state search with props submit clear search ', async () => {
  const { input, findByTestId } = searchSut()
  fireEvent.change(input, { target: { value: 'janiomiara' } })
  expect(input.value).toBe('janiomiara')
  const buttonSubmit = await findByTestId('submit')
  fireEvent.click(buttonSubmit)
  expect(input.value).toBe('')
})

test('Testing all componet search ', async () => {
  const { input, findByTestId } = searchSut()
  const buttonSubmit = await findByTestId('submit')
  expect(buttonSubmit.disabled).toEqual(true)
  expect(input.value).toBe('')
  fireEvent.change(input, { target: { value: 'janiomiara' } })
  expect(buttonSubmit.disabled).toEqual(false)
  expect(input.value).toBe('janiomiara')
  fireEvent.click(buttonSubmit)
  expect(input.value).toBe('')
})
