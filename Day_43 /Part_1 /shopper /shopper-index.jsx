import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Products } from "./products";
import { Details } from "./details";

export function ShopperIndex() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <h1>Shopper Index</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:category" element={<Products />}>
            <Route path="details/:id" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
