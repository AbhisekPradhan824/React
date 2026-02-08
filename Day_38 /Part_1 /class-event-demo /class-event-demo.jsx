import React from "react";

export class ClassEventDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "",
    };
    this.InsertClick = this.InsertClick.bind(this);
  }
  InsertClick() {
    this.setState({
      msg: "Record inserted",
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <button onClick={this.InsertClick}>Insert</button>
          <p>{this.state.msg}</p>
        </div>
      </React.Fragment>
    );
  }
}

