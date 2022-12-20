import * as React from "react";
import AddRemoveFilters from "./AddRemoveFilters";
import Basic from "./Basic";
import EventListeners from "./EventListeners";
import InteractiveProps from "./InteractiveProps";

export interface TableauExample {
  component: () => JSX.Element; //React.FC;
  name: string;
}

const examples: TableauExample[] = [
  { component: Basic, name: "Basic Embed" },
  { component: InteractiveProps, name: "Interactive Props" },
  { component: AddRemoveFilters, name: "Add/Remove Filter Buttons" },
  { component: EventListeners, name: "Event Listeners" },
];
export default examples;
