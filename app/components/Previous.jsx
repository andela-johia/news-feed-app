import React from 'react';

/**
 *This component gives the user the feature to go back to previous page
 * @export
 * @class Previous
 * @extends {React.Component}
 */
export default class Previous extends React.Component {

  /**
   * The function is responsible for switching routes between the source
   *  component and headline
   *component. On click of the back button the function is fired.
   * @static
   * @memberof Previous
   */
  static updatePrevious() {
    window.location = '#/sources';
  }
  render() {
    return (
      <button
        className="waves-effect waves-light btn"
        onClick={Previous.updatePrevious}
      ><i className="fa fa-arrow-left" aria-hidden="true" />{'  Go Back'}
      </button>
    );
  }
}
