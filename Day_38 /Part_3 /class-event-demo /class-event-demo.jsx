import React from "react";

export class ClassEventDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "",
    };
  }
  InsertClick(e) {
    alert(e.target.id);
    this.setState({
      msg: "Record inserted",
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <button id="btn2" onClick={(e) => this.InsertClick(e)}>
            Insert
          </button>
          <p>{this.state.msg}</p>
        </div>
      </React.Fragment>
    );
  }
}
