import React from 'react';
import SourceStore from '../stores/SourceStore';
import Action from '../action/NewsAction';
import Signout from './Signout.jsx';
import NewsSources from './NewsSources.jsx';


/**
 *This component renders the news sources obtained from the news Api.
  A list of news sources is rendered in this component.
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

  /**
   *This function mounts the getSources action function when it is about
   *to be rendered on the DOM. Props are passed to the action method and
   an API call is made.
   *The store updates the state of the sources prop when the componentDidMount
    function is fired.
   * @memberof Sources
   * @return {void} sets the state of sources
   */
  componentDidMount() {
    Action.getSources();
    SourceStore.on('change', this.updateNewsFeed);
  }

  /**
   *This function unmounts the rendered component using the removeListener
   method and updates the
   *state of the sources prop.
   * @return {void} sets the new state
   * @memberof Sources
   */
  componentWillUnmount() {
    SourceStore.removeListener('change', this.updateNewsFeed);
  }

  /**
   * Returns a new state of the sources when the store has been updated
   * upon rendering of the
   * component.
   * @memberof Sources
   * @returns {object} set the new state for sources
   **/
  updateNewsFeed() {
    this.setState({ sources: SourceStore.fetchSources() });
  }


  /**
   * This function sets the change of state of the search value in real time.
   * @param {string} event - this param listens for any change in event upon
   * searching.
   * @return {string} returns the new state change of the search input
   * @memberof Sources
   */
  handleChange(event) {
    this.setState({ searchString: event.target.value });
  }

  render() {
    const searchString = this.state.searchString.trim().toLowerCase();
    let sources = this.state.sources;

    if (searchString.length > 0) { // shorten the function
      sources = sources.filter((item) => {
        const itemName = item.name.trim().toLowerCase();
        return itemName.match(searchString);
      });
    }
    if (typeof (searchString) === 'number') {
      return 'Error Invalid Input';
    }
    return (
      <div>
        <Signout />
        <div className="overlay">
          <br /><br />
          <div className="row">
            <div className="input-field col s12">
              <input
              value={this.state.searchString}
              onChange={this.handleChange} type="text"
              placeholder="Search Source"
              id="searchBar"
            />
            </div>
          </div>
          <br /><br /><br />
          <div className="container">
            <div className="row">
            <NewsSources sourcesValue={sources} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
