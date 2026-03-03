import { useReducer } from "react";

let InitialCount = { count: 0 }; //store

function reducer(state, action) {
  switch (action.type) {
    case "join":
      return { count: state.count + 1 };
    case "exit":
      return { count: state.count - 1 };
  }
}

export function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, InitialCount);

  function JoinClick() {
    dispatch({ type: "join" });
  }
  function ExitClick() {
    dispatch({ type: "exit" });
  }
  return (
    <div className="container-fluid">
      <div className="mt-4">
        <button onClick={JoinClick} className="btn btn-success">
          Join
        </button>
        <button onClick={ExitClick} className="btn btn-danger">
          Exit
        </button>
      </div>
      <h2>Live Broadcast</h2>
      <iframe
        src="https://www.youtube.com/embed/jTKT6k1niXA"
        frameborder="0"
        width="400"
        height="200"
      ></iframe>

      <div>Live Viewers : {state.count}</div>
    </div>
  );
}
