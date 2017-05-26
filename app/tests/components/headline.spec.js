import React from 'react';
import { shallow } from 'enzyme';
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
    articles: [],
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

  it('Should render the news articles', () => {
    expect(wrapper.find('.container')).to.be.defined;
  });

  it('Should have a function that updates the articles', () => {
    wrapper.instance().updateArticles;
  });
  it('Should have function that handles the sortBy onclick event', () => {
    expect(wrapper.find('#sort')).to.be.defined;
  });
  it('Should have props of type array', () => {
    expect(wrapper.node.props.children).to.be.a('array');
  });
  it('Should have props rendered', () => {
    expect(wrapper.node.props.children).to.have.length(2);
  })
  it('Should have a <div> tag', () => {
    expect(wrapper.find('div').children()).to.be.defined;
  })

});


