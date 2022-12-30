import * as React from "react";
import useTableau from "./UseTableau";
import classes from "./tableau_wrapper.module.css";
import { OptionalTableauVizProps } from "./TableauViz";
import { TableauVizRef } from "./types";
import LoadingSpinner from "./LoadingSpinner";

interface TableauEmbed extends OptionalTableauVizProps {
  sourceUrl: string;
  version?: string;
  loadingSpinner?: React.ReactElement;
}

function TableauEmbed(props: TableauEmbed, ref: TableauVizRef) {
  const { sourceUrl, version, ...optionalProperties } = props;
  const { isSuccess, isError, component, ...tableau } = useTableau({
    ref,
    sourceUrl,
    version,
    optionalProperties,
  });

  if (isError) {
    console.error("Error loading tableau embed api: " + tableau.errorMessage);
    return <h3>error loading tableau</h3>;
  }

  if (!isSuccess) {
    return props.loadingSpinner ?? <LoadingSpinner />;
  }

  if (!component) {
    console.error(
      "Finished loading but component is falsy. Error message: " +
        tableau.errorMessage
    );
    return <h3>component error: falsy"</h3>;
  }

  return <>{component}</>;
}
export default React.forwardRef(TableauEmbed);
