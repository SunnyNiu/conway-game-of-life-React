import React from 'react'
import { mount } from 'enzyme'
import { Title, Paragraph } from '../style/gameOfLive-styles'
import GameText from './GameText'

describe('<GameText /> component tests', () => {
  const expected = 'The Game of Life is not your typical computer game'
  const component = <GameText />
  const wrapper = mount(component)

  it('contains "The Game of Life is not your typical computer game"', () => {
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })

  it('should contains <Title />', () => {
    const expected = true
    const actual = wrapper.containsMatchingElement(Title)
    expect(actual).toBe(expected)
  })

  it('should contains <Paragraph />', () => {
    const expected = true
    const actual = wrapper.containsMatchingElement(Paragraph)
    expect(actual).toBe(expected)
  })
})
