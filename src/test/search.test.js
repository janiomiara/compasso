import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import InputSearch from '../components/inputSearch'
import Provider from '../providers'

test('Testing  initial state search ', async () => {
  const {getByLabelText} = render(
    <Provider>
      <InputSearch/>
    </Provider>
  );
  const input = await getByLabelText("user-input");
  expect(input.value).toBe('')
})

test('Testing initial state search with props ', async () => {
  const {getByLabelText} = render(
    <Provider>
      <InputSearch/>
    </Provider>
  );
  const input = await getByLabelText("user-input");
  fireEvent.change(input, { target: { value: "janiomiara" } });
  expect(input.value).toBe('janiomiara')
})

test('Testing initial state search with props submit clear search ', async () => {
  const {getByLabelText, findByTestId} = render(
    <Provider>
      <InputSearch/>
    </Provider>
  );
  const input = await getByLabelText("user-input");
  fireEvent.change(input, { target: { value: "janiomiara" } });
  expect(input.value).toBe('janiomiara')
  const btn= await findByTestId("submit");
  fireEvent.click(btn);
  expect(input.value).toBe('')
})

