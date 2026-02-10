import React from "react";

export class Navbar extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <nav className={`p-3 d-flex justify-content-between ${this.props.theme}`}>
        <div className="h4">{this.props.brandTitle}</div>
        <div>
          {this.props.MenuItems.map((item) => (
            <button key={item} className="btn btn-link">
              {item}
            </button>
          ))}
        </div>
        <div>
          <span className="bi bi-person-fill me-2"></span>
          <span className="bi bi-search me-2"></span>
          <span className="bi bi-bell-fill"></span>
        </div>
      </nav>
    );
  }
}
