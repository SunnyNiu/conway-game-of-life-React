import React from 'react'
import { mount } from 'enzyme'

import GameText from '../../components/GameText'

describe('<GameText /> component tests', () => {
  it('contains "The Game of Life is not your typical computer game"', () => {
    const expected = 'The Game of Life is not your typical computer game'
    const component = <GameText />

    const wrapper = mount(component)
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })
})
