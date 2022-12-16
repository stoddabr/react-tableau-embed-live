/**
 * from https://loading.io/css/
 */
import * as React from "react";
import classes from "./spinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={classes["lds-ripple"]}>
      <div></div>
      <div></div>
    </div>
  );
}
