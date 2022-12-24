import * as React from "react";
import {
  TableauEmbed,
  FilterUpdateType,
} from "@stoddabr/react-tableau-embed-live";

function AddRemoveFilters() {
  return (
    <div className="App">
      <div>
        <p>
          This example shows event listeners. Two types are exposed as props:
          callbacks which have the names defined in the Tableau documentation
          are passed as props to <span>{"<tableau-viz>"}</span>
          (e.g., "onMarkSelectionChanged"), and those which are added via an
          event listener which have a prefix (e.g.,
          "onEventListenerMarkSelectionChanged").
          <br />
          <br />
          Although these two callback methods *should* do the same thing,
          sometimes only one event lisener callback method works. For example,
          here both the props are declared for a few callbacks. Notice in the
          logs that only a few trigger. This is presumabily an issue with
          Tableau's underlying API and not with this library's implementation
          (although, if you find a fix please, please open a PR which would make
          my day :).
        </p>
        <br />
      </div>
      <div className="tableau-wrapper-min">
        <TableauEmbed
          sourceUrl="https://public.tableau.com/views/WorldIndicators/GDPpercapita"
          onMarkSelectionChanged={(e: any) =>
            console.log("callback example: onMarkSelectionChanged:", { e })
          }
          onEventListenerMarkSelectionChanged={(e: any) =>
            console.log(
              "callback example: onEventListenerMarkSelectionChanged:",
              { e }
            )
          }
        />
      </div>
    </div>
  );
}

export default AddRemoveFilters;
