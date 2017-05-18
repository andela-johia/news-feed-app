import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Headlines from '../../components/Headlines';
import Signout from '../../components/Signout';

describe('<HeadLines />', () => {
  const props = {
    match: {
      params: {
        sortBy: 'top',
        source: 'espn',
      },
    },

  };
  const wrapper = shallow(<Headlines {...props} />);
  it('Should have the Signout component', () => {
    expect(wrapper.find(Signout)).to.have.length(1);
  });
  it('Should have a state for sortby', () => {
    expect(wrapper.state().sortBy).to.be.a('string');
  });
  it('Should have an initial sourceId state', () => {
    expect(wrapper.state().sourceId).to.be.a('string');
  });

  it('Renders the headline component', () => {
    expect(wrapper.find('.container')).to.be.defined;
  });

  it('Should have a function that updates the articles', () => {
    wrapper.instance().updateArticles;
  });
  it('Should have function that handles the sortBy onclick event', () => {
    expect(wrapper.find('#sort')).to.be.defined;
  });
  it('Should have an initial state for articles', () => {
    const wrapper = mount(<Headlines {...props} />);
    expect(wrapper.state().articles).to.be.defined;
  });
  it('Should have render the component on the  DOM', () => {
    const wrapper = mount(<Headlines {...props} />);
    expect(wrapper.setState().articles).to.be.defined;

  });
});


