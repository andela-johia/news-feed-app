import React from 'react';

/**
 *-This class signs out a user profile from the News feed app and deletes
 their user profile from localStorage as well their auto generated id token
 *
 * @export
 * @class Signout
 * @extends {React.Component}
 */
export default class Signout extends React.Component {


  /**
   *Thi function is responsible for logging out the user from the application. When the onClick
   *button is fired. the userprofile stored in localStorage is deleted and the user is redirected
   to the landing page.
   * @static
   * @memberof Signout
   */
  static updateLogout() {
    localStorage.removeItem('userProfile');
    window.location = '/';
  }

  render() {
    const anchorStyle = {
      textDecoration: 'none',
      marginRight: 50,
    };
    return (
      <div>
        <nav>
          <div className="nav-wrapper" >
            <div className="brand-logo center">News Central</div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><button className="waves-effect waves-light btn red" onClick={Signout.updateLogout} style={anchorStyle}>{'Logout'}</button></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
