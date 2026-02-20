import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function TutorialVideos() {
  const [cookies, setCookie, removeCookie] = useCookies(["uname"]);
  let navigate = useNavigate();
  useEffect(() => {
    if (cookies.uname == null) {
      navigate("/login");
    }
  }, []);

  function handleSignoutClick() {
    removeCookie("uname");
    navigate("/login");
  }
  return (
    <div>
      <h3>
        Our Tutorial Videos - {cookies.uname} -
        <button className="btn btn-link" onClick={handleSignoutClick}>
          Signout
        </button>
      </h3>
      <iframe
        src="https://www.youtube.com/embed/d9Jq9TJfFBI?si=vB6acu-5hr9KoNjQ"
        height="300"
        width="400"
      ></iframe>
    </div>
  );
}
