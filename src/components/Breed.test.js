import React from 'react';
import { shallow } from 'enzyme';
import Breed from './Breed';

const setup = (props = {}, state=null) => {
  const wrapper = shallow(<Breed />);
  if (state) wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

 test('renders without error', () => {
   const wrapper = setup();
   const breedButton = findByTestAttr(wrapper, "breed-button");
   expect(breedButton.length).toBe(1);
 });
// Test to see if it's rendering w/o error

test('contains correct text', () => {
  const wrapper = setup();
  wrapper.setProps({ breed: 'foo' });
  const breedButton = findByTestAttr(wrapper, "breed-button");
  expect(breedButton.text()).toContain('foo');
});
// Test to see if it's handling props correctly
