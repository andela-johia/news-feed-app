import React from 'react';

/**
 *This component gives the user the feature to go back to previous page
 *
 * @export
 * @class Previous
 * @extends {React.Component}
 */
export default class Previous extends React.Component {

  static updatePrevious() {
    window.location = '#/sources';
  }
  render() {
    return (
      <button
        className="waves-effect waves-light btn"
        onClick={Previous.updatePrevious}
      ><i className="fa fa-arrow-left" aria-hidden="true" />{'  Go Back'}</button>
    );
  }
}
