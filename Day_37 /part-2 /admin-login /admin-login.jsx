import React from "react";

export class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Product Details",
      product: { Name: "TV", Price: 34000.0 },
      categories: ["All", "Electronics", "Fashion"],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <h2>{this.state.title}</h2>
          <dl>
            <dt>Name</dt>
            <dd>{this.state.product.Name}</dd>
            <dt>Price</dt>
            <dd>{this.state.product.Price}</dd>
            <dt>Category</dt>
            <dd>
              <select>
                {this.state.categories.map((category) => (
                  <option>{category}</option>
                ))}
              </select>
            </dd>
          </dl>
        </div>
      </React.Fragment>
    );
  }
}
