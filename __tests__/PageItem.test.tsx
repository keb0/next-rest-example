import React from 'react'
import { shallow } from 'enzyme'
import PageItem from '../components/PageItem'

const props = {
  id: 1,
  name: 'string',
  category: 'string',
  tags: 'string',
  title: 'title',
  url: 'string',
  description: 'string',
  img: 'string',
}

test('hello world', () => {
  const wrapper = shallow(<PageItem page={props} />)
  expect(wrapper.find('h2').text()).toEqual('title')
})
