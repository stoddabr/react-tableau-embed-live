import * as React from "react";
import "./App.css";
import { TableauEmbed } from "../lib";
import { FilterUpdateType } from "../lib/TableauEmbed/ScrapedTableauTypes/ExternalContract_Shared_Namespaces_Tableau";

function App() {
  const vizRef = React.useRef<any>();

  async function removeAmericasFilter() {
    console.log("called", vizRef);
    if (vizRef && vizRef.current) {
      const viz = vizRef.current;
      const workbook = viz.workbook;
      const activeSheet = workbook.activeSheet;
      await activeSheet.applyFilterAsync(
        "Region",
        ["The Americas"],
        FilterUpdateType.Remove
      );
    }
  }

  async function addAmericasFilter() {
    console.log("called", vizRef);
    if (vizRef && vizRef.current) {
      const viz = vizRef.current;
      const workbook = viz.workbook;
      const activeSheet = workbook.activeSheet;
      await activeSheet.applyFilterAsync(
        "Region",
        ["The Americas"],
        FilterUpdateType.Add
      );
    }
  }

  return (
    <div className="App">
      <h1>The Tableau Embedded API v3 is now a React component!</h1>
      <TableauEmbed
        ref={vizRef}
        sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita"
        height={100}
        width={900}
        {...{ "hide-tabs": true }}
        onEventListenerMarkSelectionChanged={(e) =>
          console.log("mark selection change:", { e })
        }
      />
      <div className="buttons">
        <button onClick={() => removeAmericasFilter()}>
          Remove Americas Filter
        </button>
        <button onClick={() => addAmericasFilter()}>Add Americas Filter</button>
      </div>
    </div>
  );
}

export default App;
