import { useState } from "react";
import Output from "./Output";

function UseCallbackDemo() {
  const [toggle, setToggle] = useState(false);

  console.log("Callback Demo");

  return (
    <>
      <h1>Use Callback Demo in Action</h1>

      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

      <hr />

      <Output toggle={true} />
    </>
  );
}

export default UseCallbackDemo;
