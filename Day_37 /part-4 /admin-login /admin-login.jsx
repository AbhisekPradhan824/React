import axios from "axios";
import React from "react";

export class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
    };
  }
  LoadCategories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => this.setState({ categories: response.data }));
  }
  LoadProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => this.setState({ products: response.data }));
  }
  componentDidMount() {
    this.LoadCategories();
    this.LoadProducts();
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <h2>Select a Category</h2>
          <select>
            {this.state.categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="mt-3">
          {this.state.products.map((product) => (
            <img
              key={product.id}
              src={product.image}
              alt={product.id}
              height="100"
              width="100"
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
