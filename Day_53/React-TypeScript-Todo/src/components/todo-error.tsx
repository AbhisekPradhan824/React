import { Link } from "react-router-dom";

export function ToDoError() {
  return (
    <div className="text-center bg-white p-2">
      <h2 className="text-danger">Invalid Credentials</h2>
      <Link to="/">Try Again</Link>
    </div>
  );
}
