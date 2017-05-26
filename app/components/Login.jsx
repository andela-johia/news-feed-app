import React from 'react';
import GoogleLogin from 'react-google-login';
import { withRouter } from 'react-router-dom';

/**
 * Renders a google signin feature for the news feed application
 *
 * @export
 * @class Login
 * @extends {React.Component}
 */
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  /**
   *This function stores the user profile of a google user to local storage.
   * @return {object} gets the userprofile and google id and stores it in an
   * object
   * @param {string} response - this param gets the google user profile
   * upon sign in
   *
   * @memberof Login
   */
  responseGoogle(response) {
    const loginProfile = response.getBasicProfile();
    const userProfile = {};
    userProfile.name = loginProfile.getName();
    userProfile.email = loginProfile.getEmail();
    userProfile.idToken = response.googleId;
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    this.props.history.push('/sources');
  }


  render() {
    const googleId = process.env.GOOGLE_ID;
    return (
      <div>
        <div id="loginHeader">
        <div>
          <nav>
            <div className="nav-wrapper">
              <div className="brand-logo center">News Central</div>
              <ul id="nav-mobile" className="left hide-on-med-and-down" />
            </div>
          </nav>
        </div>
        <div className="row" id="formStyle">
          <div className="col s12 m6">
            <div className="card  red lighten-2">
              <div className="card-content white-text">
                <span className="card-title">Welcome to News Central</span>
                <p>To sign in with google click the Sign in button </p>
                <div className="card-action">
                  <GoogleLogin
                    className="waves-effect waves-light btn"
                    clientId={googleId}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                  >{'Sign In With   '}<i className="fa fa-google-plus" />
                  </GoogleLogin>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);

Login.propTypes = {
  history: React.PropTypes.object,
};

