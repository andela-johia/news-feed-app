import React from 'react';
import GoogleLogin from 'react-google-login';

/**
 * Renders a google signin feature for the news feed application
 *
 * @export
 * @class Login
 * @extends {React.Component}
 */
export default class Login extends React.Component {

  /**
   *This function stores the user profile of a google user to local storage.
   *
   * @param {any} response - this param gets the google user profile upon sign in
   *
   * @memberof Login
   */
  static responseGoogle(response) {
    const loginProfile = response.getBasicProfile();
    const userProfile = {};
    userProfile.name = loginProfile.getName();
    userProfile.email = loginProfile.getEmail();
    userProfile.idToken = response.googleId;
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    window.location = '#/sources';
  }
  /**
   *
   *
   * @param {any} error - an error response is returned if the user profile is invalid.
   *
   * @memberof Login
   */

  render() {
    const formStyle = {
      align: 'center',
      margin: '0 auto',
      textAlign: 'center',
      marginTop: '150px',
      marginLeft: '450px',
    };
    const googleId = '116314004036-ogkinrg0ms586tvar5c56dam8a8gfrcn.apps.googleusercontent.com';
    return (
      <div>
        <div>
          <nav>
            <div className="nav-wrapper">
              <div className="brand-logo center">News Central</div>
              <ul id="nav-mobile" className="left hide-on-med-and-down" />
            </div>
          </nav>
        </div>
        <div className="row" style={formStyle}>
          <div className="col s12 m6">
            <div className="card  red lighten-2">
              <div className="card-content white-text">
                <span className="card-title">Welcome to News Central</span>
                <p>To sign in with google click the Sign in button </p>
                <div className="card-action">
                  <GoogleLogin
                    className="waves-effect waves-light btn"
                    clientId={googleId}
                    onSuccess={Login.responseGoogle}
                    onFailure={Login.responseGoogle}
                  >{'Sign In With   '}<i className="fa fa-google-plus" /></GoogleLogin>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
