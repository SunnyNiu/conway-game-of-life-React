import React from 'react'
import { mount } from 'enzyme'
import { Title, Paragraph, BorderParagraph } from '../../style/gameOfLive-styles'

import GameRulesAndDes from '../../components/GameRulesAndDescription'

describe('<GameText /> component tests', () => {
  const component = <GameRulesAndDes />
  const wrapper = mount(component)

  it('contains "The Rules"', () => {
    const expected = 'The Rules'

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

  it('should contains <BorderParagraph />', () => {
    const expected = true
    const actual = wrapper.containsMatchingElement(BorderParagraph)
    expect(actual).toBe(expected)
  })
})
