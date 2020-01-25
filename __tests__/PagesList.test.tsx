import React from 'react'
import { shallow } from 'enzyme'
import PagesList from '../components/PagesList'

const props = [
  {
    id: 1,
    name: 'string',
    category: 'string',
    tags: 'string',
    title: 'title',
    url: 'string',
    description: 'string',
    img: 'string',
  },
]

test('hello world', () => {
  const wrapper = shallow(<PagesList pagesList={props} />)
  expect(wrapper.find('li').length).toEqual(1)
})
