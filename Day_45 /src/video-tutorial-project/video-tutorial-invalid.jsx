import { Link } from "react-router-dom";

export function TutorialInvalid() {
  return (
    <div>
      <h3 className="text-danger">Invalid Credentials</h3>
      <Link to="/login">Try Again</Link>
    </div>
  );
}
