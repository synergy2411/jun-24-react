import { useState } from "react";
import ClassBased from "./Components/Playground/ClassBased";
import UserLogin from "./Components/Playground/UserLogin";

function App() {
  // const [show, setShow] = useState(true);

  return (
    <div>
      <h1>App Works!</h1>

      <UserLogin />

      {/* <button onClick={() => setShow(!show)} className="btn btn-secondary">
        {show ? "Hide" : "Show"}
      </button> */}
      {/* <Expenses /> */}
      {/* {show && <ClassBased />} */}

      {/* <ClassBased value="Component A" /> */}

      {/* <hr />
      <ClassBased value="Component B" /> */}
    </div>
  );
}

export default App;
