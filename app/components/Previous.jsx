import React from 'react';
import { withRouter } from 'react-router-dom';

/**
 *This component gives the user the feature to go back to previous page
 * @export
 * @class Previous
 * @extends {React.Component}
 */
class Previous extends React.Component {
  constructor(props) {
    super(props);
    this.updatePrevious = this.updatePrevious.bind(this);
  }

  /**
   * The function is responsible for switching routes between the source
   *  component and headline
   *component. On click of the back button the function is fired.
   * @return {void} changes the state of the component
   * @memberof Previous
   *
   */
  updatePrevious() {
    this.props.history.push('/sources');
  }
  render() {
    return (
      <button
        className="waves-effect waves-light btn"
        onClick={this.updatePrevious}
      ><i className="fa fa-arrow-left" aria-hidden="true" />{'  Go Back'}
      </button>
    );
  }
}
export default withRouter(Previous);

Previous.propTypes = {
  history: React.PropTypes.object,
};
