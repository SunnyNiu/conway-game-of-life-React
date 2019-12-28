import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App /> component tests', () => {
  it('renders <App /> contains <GameText />', () => {
    const expected = '<GameText />'

    const wrapper = shallow(<App/>)
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })

  it('renders <App /> contains <GameRulesAndDes />', () => {
    const expected = '<GameRulesAndDes />'

    const wrapper = shallow(<App/>)
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })
})
