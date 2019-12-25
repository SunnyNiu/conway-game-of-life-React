import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { enzyme, shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import App from '../../components/App'
import toJson from 'enzyme-to-json'

const middleware = []
const mockStore = configureStore(middleware)
describe('<App /> component tests', () => {
  it('renders App', () => {
    const initialState = {
      matrix: [[false, false, false], [false, false, false], [false, false, false]],
      size: 3,
      selected: '',
      isRunning: false,
      speed: 1
    }

    const store = mockStore(initialState)
    const component = <Provider store={store}>
      <App/>
    </Provider>
    const wrapper = mount(component)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
