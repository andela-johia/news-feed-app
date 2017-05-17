import React from 'react';
import SourceStore from '../stores/SourceStore';
import * as ActionSource from '../action/NewsAction';
import Signout from './Signout';


/**
 *This component renders the news sources obtained from the news Api.
  A list of news sources is rendered in this component.
 *
 * @export
 * @class Sources
 * @extends {React.Component}
 */
export default class Sources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      searchString: '',
    };

    this.updateNewsFeed = this.updateNewsFeed.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    ActionSource.getSources();
    SourceStore.on('change', this.updateNewsFeed);
  }

  componentWillUnmount() {
    ActionSource.getSources();
    SourceStore.removeListener('change', this.updateNewsFeed);
  }

  /**
   * Returns a new state of the sources upon rendering
   *
   *
   * @memberof Sources
   */
  updateNewsFeed() {
    this.setState({ sources: SourceStore.fetchSources() });
  }


  /**
   * This function sets the change of state of the search value in real time.
   *
   * @param {any} event - this param listens for any change in event upon searching.
   *
   * @memberof Sources
   */
  handleChange(event) {
    this.setState({ searchString: event.target.value });
  }

  render() {
    const searchString = this.state.searchString.trim().toLowerCase();
    let sources = this.state.sources;


    if (searchString.length > 0) { // shorten the function
      sources = sources.filter(item => item.name.trim().toLowerCase().match(searchString));
    }
    if (typeof (searchString) === 'number') {
      return 'Error Invalid Input';
    }
    const NewsSource = sources.map((item) => {
      const sortsArray = item.sortBysAvailable;
      const links = sortsArray.map(link => (
        <a key={link} href={`#/sources/${item.id}/${link}`}>{link}</a>
      ));
      return (<div className="col s12 m4" key={item.name}>
        <div className="card small grey lighten-4">
          <span className="card-title">{item.name}</span>
          <div className="card-content">
            <p>{item.description}</p>
          </div>
          <div className="card-action">
            {links}
          </div>
        </div>
      </div >);
    });
    return (
      <div>
        <Signout />
        <h4>{'News Source'}</h4><br /><br />
        <div className="row">
          <div className="input-field col s12">
            <input
              value={this.state.searchString}
              onChange={this.handleChange} type="text"
              placeholder="Search Source"
            />
          </div>
        </div>
        <br /><br /><br />
        <div className="container">
          <div className="row">
            {NewsSource}
          </div>
        </div>
      </div>
    );
  }
}
