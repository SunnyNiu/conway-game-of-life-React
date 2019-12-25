import React from 'react'
import { mount } from 'enzyme'

import GameRulesAndDes from '../../components/GameRulesAndDescription'

describe('<GameText /> component tests', () => {
  it('contains "The Rules"', () => {
    const expected = 'The Rules'
    const component = <GameRulesAndDes />

    const wrapper = mount(component)
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })
})
