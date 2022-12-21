import * as React from "react";
import {
  TableauEmbed,
  FilterUpdateType,
} from "@stoddabr/react-tableau-embed-live";
import "./tableau.css";

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
      <div className="tableau-wrapper">
        <TableauEmbed
          ref={vizRef}
          sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita"
          {...{ "hide-tabs": true }}
        />
      </div>
    </div>
  );
}

export default AddRemoveFilters;
