import * as React from "react";
import "../App.css";
import {
  TableauEmbed,
  FilterUpdateType,
} from "@stoddabr/react-tableau-embed-live";

function AddRemoveFilters() {
  return (
    <div className="App">
      <TableauEmbed
        sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita"
        {...{ "hide-tabs": true }}
      />
    </div>
  );
}

export default AddRemoveFilters;
