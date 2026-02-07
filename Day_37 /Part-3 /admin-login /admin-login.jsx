import axios from "axios";
import React from "react";

export class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => this.setState({ categories: response.data }));
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <h2>Select a Category</h2>
          <select>
            {this.state.categories.map((category) => (
              <option>{category}</option>
            ))}
          </select>
        </div>
      </React.Fragment>
    );
  }
}
