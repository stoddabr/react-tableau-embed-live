import * as React from "react";
import { OptionalTableauVizProps } from "./TableauViz";
import { TableauVizRef } from "./types";
interface TableauEmbed extends OptionalTableauVizProps {
    sourceUrl: string;
    version?: string;
}
declare function TableauEmbed(props: TableauEmbed, ref: TableauVizRef): JSX.Element;
declare const _default: React.ForwardRefExoticComponent<TableauEmbed & React.RefAttributes<any>>;
export default _default;
