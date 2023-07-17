import * as React from "react";
import {
  TableauEmbed,
  FilterUpdateType,
} from "@stoddabr/react-tableau-embed-live";
import "./tableau.css";

function Parameter() {
  const vizRef = React.useRef<any>();

  return (
    <div className="App">
      <p>
        A custom parameter in the following tableau dashboard changes the behavior for clicking on links to opening in the current tab from the default behavior of openeing a new tab.
      </p>
      <div className="tableau-wrapper">
      <TableauEmbed
        version="3.5.0"
        // this view has external links, great for testing, does not work within a CSB though :/
        sourceUrl="https://public.tableau.com/views/Tutorialsofvisualizations/Tutorial"
        toolbar="hidden"
        hide-tabs
        hide-edit-button
      >
        <custom-parameter name=":linktarget" value="_parent"></custom-parameter>
      </TableauEmbed>       
      </div>
    </div>
  );
}

export default Parameter;