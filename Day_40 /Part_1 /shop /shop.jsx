import React from "react";
import { Navbar } from "../../../components-library/navbar";

export class Shop extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container-fluid">
        <Navbar
          brandTitle="Shopper."
          MenuItems={["Home", "Shop", "Kids", "Men"]}
          theme="bg-dark text-white"
        />
        <Navbar
          brandTitle="Training Online."
          MenuItems={["Home", "Faculty", "Courses"]}
          theme="bg-warning text-dark mt-1"
        />
      </div>
    );
  }
}
