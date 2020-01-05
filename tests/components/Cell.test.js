import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'
import renderer from 'react-test-renderer'

import Cell from '../../src/components/Cell'

describe('Cell component tests', () => {
  it('it render Cell', () => {
    const expected = 'Show'
    const wrapper = mount(<Cell>Show</Cell>)
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })

  it('height props works', () => {
    const tree = renderer.create(<Cell>Show</Cell>).toJSON()
    expect(tree).toHaveStyleRule('height', '100%')
  })

  it('min-width props works', () => {
    const tree = renderer.create(<Cell>Show</Cell>).toJSON()
    expect(tree).toHaveStyleRule('min-width', '0')
  })

  it('grid-column-end props works with default value', () => {
    const tree = renderer.create(<Cell>Show</Cell>).toJSON()
    expect(tree).toHaveStyleRule('grid-column-end', 'span 1')
  })

  it('grid-column-end props works', () => {
    const expected = 'span 3'
    const tree = renderer.create(<Cell width={3}>Show</Cell>).toJSON()
    expect(tree).toHaveStyleRule('grid-column-end', expected)
  })

  it('grid-row-end props works with default value', () => {
    const tree = renderer.create(<Cell>Show</Cell>).toJSON()
    expect(tree).toHaveStyleRule('grid-row-end', 'span 1')
  })

  it('grid-row-end props works', () => {
    const expected = 'span 3'
    const tree = renderer.create(<Cell height={3}>Show</Cell>).toJSON()
    expect(tree).toHaveStyleRule('grid-row-end', expected)
  })

  it('grid-column-start props works', () => {
    const expected = '1'
    const tree = renderer.create(<Cell left='1' >Show</Cell>).toJSON()
    expect(tree).toHaveStyleRule('grid-column-start', expected)
  })

  it('grid-row-start props works', () => {
    const expected = '1'
    const tree = renderer.create(<Cell top='1' >Show</Cell>).toJSON()
    expect(tree).toHaveStyleRule('grid-row-start', expected)
  })

  it('text-align props works', () => {
    const expected = 'center'
    const tree = renderer.create(<Cell center >Show</Cell>).toJSON()
    expect(tree).toHaveStyleRule('text-align', expected)
  })
})
