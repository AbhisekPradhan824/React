
import React from "react";

export class Login extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    alert("Login Component Mounted Successfully");
  }
  componentWillUnmount() {
    alert("Login Component Will Unmount");
  }
  render() {
    return (
      <div>
        <h3>Login</h3>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" />
          </dd>
          <dd>
            <button className="btn btn-primary">Login</button>
          </dd>
        </dl>
      </div>
    );
  }
}

export class Register extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    alert("Register Component Mounted Successfully");
  }
  componentWillUnmount() {
    alert("Register Component Will Unmount");
  }
  render() {
    return (
      <div>
        <h3>Register</h3>
      </div>
    );
  }
}

export class CycleDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      component: "",
    };
  }
  LoginClick() {
    this.setState({ component: <Login /> });
  }
  RegisterClick() {
    this.setState({ component: <Register /> });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={this.LoginClick.bind(this)}
          >
            Login
          </button>
          <button
            onClick={this.RegisterClick.bind(this)}
            className="btn btn-danger me-2"
          >
            Register
          </button>
        </div>
        <div className="mt-4">{this.state.component}</div>
      </div>
    );
  }
}
