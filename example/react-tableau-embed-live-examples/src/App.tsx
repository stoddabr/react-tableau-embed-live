import * as React from "react";
import "./App.css";
import examples from "./tableau_examples";
import AddRemoveFilters from "./tableau_examples/AddRemoveFilters";

const Spacer = () => <div className="example-spacer"></div>;

function App() {
  const examplesRef = React.useRef<Array<HTMLDivElement | null>>([]);
  // you can access the elements with itemsRef.current[n]

  React.useEffect(() => {
    examplesRef.current = examplesRef.current.slice(0, examples.length);
  }, [examples]);

  return (
    <div className="App">
      <h1>The Tableau Embedded API v3 is now a React component!</h1>
      <h4>Jump to an example</h4>
      <div className="buttons">
        {examples.map(({ name }, i) => (
          <button
            onClick={() =>
              examplesRef.current[i]?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {name}
          </button>
        ))}
      </div>
      <Spacer />
      {examples.map(({ component: Component, name }, i) => (
        <div key={i} ref={(el: any) => (examplesRef.current[i] = el)}>
          <h3>
            Example {i + 1}: {name}
          </h3>
          <Component />
          {
            // suffix spacer on all elements except for last one
            i !== examples.length - 1 ? <Spacer /> : null
          }
        </div>
      ))}
    </div>
  );
}

export default App;
