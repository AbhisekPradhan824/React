import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Login } from "./components/login/login";
import { Mobiles } from "./components/mobiles/mobiles";
import { Details } from "./components/details/details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h2>Shopper.</h2>
          <nav>
            <Link to="/">Home</Link> <span></span>
            <Link to="kids">Kids</Link>
            <span></span>
            <Link to="men">Men</Link>
            <span></span>
            <Link to="login">Login </Link>
            <span></span>
            <Link to="mobiles/Realme">Realme</Link> <span></span>
            <Link to="mobiles/Iphone">Iphone</Link>
          </nav>
        </header>
        <hr />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Home</h2> <p>Year end Sale 40% OFF</p>
              </>
            }
          ></Route>
          <Route
            path="kids"
            element={
              <>
                <h2>Kids Fashion</h2> <p>30% OFF on kids wear</p>
              </>
            }
          ></Route>
          <Route
            path="men"
            element={
              <>
                <h2>Men's Fashion</h2> <p>winter wear, Shoes , Jeans...</p>
              </>
            }
          ></Route>
          <Route path="login" element={<Login />} />
          <Route path="mobiles/:category" element={<Mobiles />} />
          <Route path="details/:id/:name/:price/:stock" element={<Details />} />

          <Route
            path="*"
            element={
              <>
                <code>Not Found: Path you request is not found</code>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
