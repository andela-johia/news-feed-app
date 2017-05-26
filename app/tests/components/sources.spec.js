import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Sources from '../../components/Sources';
import Signout from '../../components/Signout';

function setup() {
  const props = {
    sources: {},
    searchString:''
  }
  return shallow(<Sources {...props} />);
}

describe('<Sources/>', () => {
  const wrapper = setup();
  it('Should have the signout component', () => {
    expect(wrapper.find(Signout)).to.have.length(1);
  });
  it('Should have an initial state for search string', () => {
    expect(wrapper.state().searchString).to.equal('');
  });
  it('Should have an updated source state', () => {
    expect(wrapper.setState().sources).to.have.length.not.to.equal(0);
  });
  it('Should have an updated searchString state', () => {
    const wrapper = shallow(<Sources />);
    expect(wrapper.setState().sources).to.have.length.not.to.equal(0);
  });
  it('Should have a button that handles onClick event', () => {
    expect(wrapper.find('button')).to.be.defined;
  });
  it('Should have a div that renders the JSX on the DOM', () => {
    expect(wrapper.find('.container')).to.be.defined;
  });
  it('Should have a textfield in the component for searching', () => {
    expect(wrapper.find('.input-field')).to.be.defined;
  });
  it('Should have its props rendered on the DOM', () => {
    expect(wrapper.node.props.children).to.have.length(2);
  });
  it('Should have a <div> tag that renders the props', () => {
    expect(wrapper.find('div').children()).to.be.Called;
  });
});
