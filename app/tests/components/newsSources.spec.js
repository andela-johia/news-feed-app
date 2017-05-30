import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NewsSources from '../../components/NewsSources';

const props = {
  sourcesValue: [{
    "id": "abc-news-au",
    "name": "ABC News (AU)",
    "url": "http://www.abc.net.au/news",
    "category": "general",
    "language": "en",
    "country": "au",
    "sortBysAvailable": [
      "top"
    ]
  }],
};
describe('<NewsSources />', () => {
  const wrapper = shallow(<NewsSources {...props} />);

  it('Should have a <div> tag that renders the props', () => {
    expect(wrapper.find('div').children()).to.be.Called;
  });
  it('Should have its props rendered on the DOM', () => {
    expect(wrapper.node.props.children).to.have.length(1);
  });

});
