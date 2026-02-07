import React from "react";

export class AdminLogin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid ">
          <form>
            <h2>Admin Login</h2>
            <dl>
              <dt>User Id</dt>
              <dd>
                <input type="text" />
              </dd>
              <dt>Password</dt>
              <dd>
                <input type="password" />
              </dd>
            </dl>
            <button>Login</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

