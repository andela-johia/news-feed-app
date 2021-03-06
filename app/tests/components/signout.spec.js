
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Signout from '../../components/Signout';

describe('<Signout />', () => {
  const wrapper = shallow(<Signout />);
  it('Should render a navigation bar', () => {
    expect(wrapper.find('nav-wrapper')).to.be.defined;
  });
  it('Should have localStorage present for removing saved profile', () => {
    expect(wrapper.find('localStorage')).to.be.defined;
  });
  it('Should have an anchor tag that display the logout button', () => {
    expect(wrapper.find('a')).to.be.defined;
  });
  it('Should have a <div> tag', () => {
    expect(wrapper.find('div').children()).to.be.Called;
  })
})
