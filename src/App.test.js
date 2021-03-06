import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

const setup = (props)=>{
  return shallow(<App {...props}/>);
};

it('renders without error', ()=>{
  const wrapper = setup();
  expect(wrapper.length).toBe(1);
});


