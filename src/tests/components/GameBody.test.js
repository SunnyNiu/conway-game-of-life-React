import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import GameBody from '../../components/GameBody'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('GameBody component tests', () => {
  it('it render GameBody', () => {
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
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
