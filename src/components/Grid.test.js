import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'
import renderer from 'react-test-renderer'

import Grid from './Grid'

describe('Grid component tests', () => {
  it('it render Grid', () => {
    const expected = 'Show'
    const wrapper = mount(<Grid>Show</Grid>)
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })

  it('display props works', () => {
    const expected = 'grid'
    const tree = renderer.create(<Grid>Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('display', expected)
  })

  it('height props works', () => {
    const expected = '3'
    const tree = renderer.create(<Grid height='3'>Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('height', expected)
  })

  it('grid-auto-flow props works', () => {
    const expected = 'row'
    const tree = renderer.create(<Grid>Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('grid-auto-flow', expected)
  })

  it('grid-auto-rows props works', () => {
    const expected = 'minmax(21px,auto)'
    const tree = renderer.create(<Grid minRowHeight = '21px'>Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('grid-auto-rows', expected)
  })

  it('grid-auto-rows props works with default value', () => {
    const expected = 'minmax(10px,auto)'
    const tree = renderer.create(<Grid >Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('grid-auto-rows', expected)
  })

  it('grid-template-rows props works', () => {
    const expected = '1'
    const tree = renderer.create(<Grid rows='1'>Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('grid-template-rows', expected)
  })

  it('grid-template-rows props works with default value', () => {
    const tree = renderer.create(<Grid>Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('grid-template-rows', undefined)
  })

  it('grid-template-columns props works', () => {
    const expected = '3'
    const tree = renderer.create(<Grid columns='3' >Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('grid-template-columns', expected)
  })

  it('grid-template-columns props works with default value', () => {
    const tree = renderer.create(<Grid>Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('grid-template-columns', 'repeat(12,1fr)')
  })

  it('grid-gap props works with default value', () => {
    const expected = '8px'
    const tree = renderer.create(<Grid>Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('grid-gap', expected)
  })

  it('grid-gap props works', () => {
    const expected = '3px'
    const tree = renderer.create(<Grid gap='3px'>Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('grid-gap', expected)
  })

  it('columnGap props works', () => {
    const expected = '3px'
    const tree = renderer.create(<Grid columnGap='3px'>Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('column-gap', expected)
  })

  it('row-gap props works', () => {
    const expected = '3px'
    const tree = renderer.create(<Grid rowGap='3px'>Show</Grid>).toJSON()
    expect(tree).toHaveStyleRule('row-gap', expected)
  })
})
