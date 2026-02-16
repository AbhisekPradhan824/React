import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { TutorialHome } from "./video-tutorial-home";
import { TutorialLogin } from "./video-tutorial-login";
import { TutorialRegister } from "./video-tutorial-register";
import { TutorialVideos } from "./video-tutorial-videos";

export function TutorialIndex() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="bg-dark text-white p-2 text-center">
          <span className="h3">Online Video Tutorial</span>
        </header>
        <section className="row">
          <nav className="col-2 bg-light">
            <div className=" btn btn-dark w-100 mb-2 mt-2">
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </div>
            <div className=" btn btn-dark w-100 mb-2 mt-2">
              <Link to="login" className="text-white text-decoration-none">
                Login
              </Link>
            </div>
            <div className=" btn btn-dark w-100 mb-2 mt-2">
              <Link to="register" className="text-white text-decoration-none">
                Register
              </Link>
            </div>
            <div className=" btn btn-dark w-100 mb-2 mt-2">
              <Link to="videos" className="text-white text-decoration-none">
                Our Videos
              </Link>
            </div>
          </nav>
          <main className="col-10">
            <Routes>
              <Route path="/" element={<TutorialHome />} />
              <Route path="login" element={<TutorialLogin />} />
              <Route path="register" element={<TutorialRegister />} />
              <Route path="videos" element={<TutorialVideos />} />
            </Routes>
          </main>
        </section>
      </BrowserRouter>
    </div>
  );
}
