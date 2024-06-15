import UseCallbackDemo from "./Components/Playground/UseCallbackDemo";
import UseTransitionDemo from "./Components/Playground/UseTransitionDemo";

function App() {
  // const [show, setShow] = useState(true);

  return (
    <div>
      <h1>App Works!</h1>

      <UseTransitionDemo />
      {/* <UseCallbackDemo /> */}

      {/* <ThemeContextProvider>
        <GrandParent />
      </ThemeContextProvider> */}

      {/* <UseReducerDemo /> */}
      {/* <UseEffectDemo /> */}
      {/* <UserLogin /> */}

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
