import { type } from "@testing-library/user-event/dist/type";
import React from "react";

function Restart({ dispatch }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart
    </button>
  );
}

export default Restart;
