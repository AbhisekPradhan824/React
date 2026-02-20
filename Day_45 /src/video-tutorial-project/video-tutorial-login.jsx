import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export function TutorialLogin() {
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["uname"]);
  const formik = useFormik({
    initialValues: {
      UserId: "",
      Password: "",
    },
    onSubmit: (user) => {
      axios.get("http://127.0.0.1:4040/users").then((response) => {
        var userdetails = response.data.find(
          (item) => item.UserId === user.UserId,
        );
        if (
          userdetails.UserId === user.UserId &&
          userdetails.Password === user.Password
        ) {
          setCookie("uname", user.UserId, [
            { expires: new Date("2026-19-02") },
          ]);
          navigate("/videos");
        } else {
          navigate("/invalid");
        }
      });
    },
  });

  useEffect(() => {
    if (window.navigator.cookieEnabled) {
      alert("You can Login");
    } else {
      alert("Please enable Cookies in your browser..");
    }
    if (cookies.uname == null) {
      alert("Please Login..");
    } else {
      navigate("/videos");
    }
  }, []);

  return (
    <div>
      <form className="w-25" onSubmit={formik.handleSubmit}>
        <h3>User Login</h3>
        <dl>
          <dt>User Id</dt>
          <dd>
            <input
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              name="UserId"
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              name="Password"
              onChange={formik.handleChange}
              className="form-control"
            />
          </dd>
        </dl>
        <button className="btn btn-primary">Login</button>
      </form>
      <p>
        <Link to="/register">New User Register</Link>
      </p>
    </div>
  );
}
