import * as React from "react";
import {
  TableauEmbed,
  FilterUpdateType,
} from "@stoddabr/react-tableau-embed-live";

function AddRemoveFilters() {
  return (
    <div className="App">
      <TableauEmbed sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita" />
    </div>
  );
}

export default AddRemoveFilters;
