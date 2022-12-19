import * as React from "react";
import "../App.css";
import {
  TableauEmbed,
  FilterUpdateType,
} from "@stoddabr/react-tableau-embed-live";

function AddRemoveFilters() {
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
      <div className="buttons">
        <button onClick={() => removeAmericasFilter()}>
          Remove Americas Filter
        </button>
        <button onClick={() => addAmericasFilter()}>Add Americas Filter</button>
      </div>
      <TableauEmbed
        ref={vizRef}
        sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita"
        {...{ "hide-tabs": true }}
      />
    </div>
  );
}

export default AddRemoveFilters;
