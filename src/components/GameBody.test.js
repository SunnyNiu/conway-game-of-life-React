import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Button, DropdownType, Input, Speed, CellStyle } from '../style/gameOfLive-styles'

import GameBody from './GameBody'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('GameBody component tests', () => {
  const initialState = {
    matrix: [[false, false, false], [false, false, false], [false, false, false]],
    size: 3,
    selected: '',
    isRunning: false,
    speed: 1
  }
  const store = mockStore(initialState)
  const component =
      <Provider store={store}>
        <GameBody />
      </Provider>
  const wrapper = mount(component)

  it('it render GameBody', () => {
    const wrapper = mount(component)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should contains <Button />', () => {
    const expected = true
    const actual = wrapper.containsMatchingElement(Button)
    expect(actual).toBe(expected)
  })

  it('should contains <DropdownType />', () => {
    const expected = true
    const actual = wrapper.containsMatchingElement(DropdownType)
    expect(actual).toBe(expected)
  })

  it('should contains <Input />', () => {
    const expected = true
    const actual = wrapper.containsMatchingElement(Input)
    expect(actual).toBe(expected)
  })

  it('should contains <Speed />', () => {
    const expected = true
    const actual = wrapper.containsMatchingElement(Speed)
    expect(actual).toBe(expected)
  })

  it('should contains <CellStyle />', () => {
    const expected = true
    const actual = wrapper.containsMatchingElement(CellStyle)
    expect(actual).toBe(expected)
  })
})
