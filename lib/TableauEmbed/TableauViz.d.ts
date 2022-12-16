/**
 * wraps custom element
 *
 * for props:
 * @see https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_configure.htm
 *
 * for
 */
import * as React from "react";
export interface OptionalTableauVizProps {
    height?: React.CSSProperties["height"];
    width?: React.CSSProperties["width"];
    "hide-tabs"?: boolean;
    toolbar?: "top" | "bottom" | "hidden";
    device?: "default" | "desktop" | "tablet" | "phone";
    "instance-id-to-clone"?: any;
    "disable-url-actions"?: boolean;
    "hide-edit-button"?: boolean;
    "hide-edit-in-desktop-button"?: boolean;
    "suppress-default-edit-behavior"?: boolean;
    onCustomMarkContextMenuEvent?: (event: any) => void;
    onCustomViewLoaded?: (event: any) => void;
    onCustomViewRemoved?: (event: any) => void;
    onCustomViewSaved?: (event: any) => void;
    onCustomViewSetDefault?: (event: any) => void;
    onEditButtonClicked?: (event: any) => void;
    onEditInDesktopButtonClicked?: (event: any) => void;
    onFilterChanged?: (event: any) => void;
    onFirstInteractive?: (event: any) => void;
    onFirstVizSizeKnown?: (event: any) => void;
    onMarkSelectionChanged?: (event: any) => void;
    onToolbarStateChanged?: (event: any) => void;
    onTabSwitched?: (event: any) => void;
    onParameterChanged?: (event: any) => void;
    onUrlAction?: (event: any) => void;
    onWorkbookPublished?: (event: any) => void;
    onWorkbookPublishedAs?: (event: any) => void;
    onWorkbookReadyToClose?: (event: any) => void;
    onEventListenerCustomMarkContextMenuEvent?: (event: any) => void;
    onEventListenerCustomViewLoaded?: (event: any) => void;
    onEventListenerCustomViewRemoved?: (event: any) => void;
    onEventListenerCustomViewSaved?: (event: any) => void;
    onEventListenerCustomViewSetDefault?: (event: any) => void;
    onEventListenerEditButtonClicked?: (event: any) => void;
    onEventListenerEditInDesktopButtonClicked?: (event: any) => void;
    onEventListenerFilterChanged?: (event: any) => void;
    onEventListenerFirstInteractive?: (event: any) => void;
    onEventListenerFirstVizSizeKnown?: (event: any) => void;
    onEventListenerMarkSelectionChanged?: (event: any) => void;
    onEventListenerToolbarStateChanged?: (event: any) => void;
    onEventListenerTabSwitched?: (event: any) => void;
    onEventListenerParameterChanged?: (event: any) => void;
    onEventListenerUrlAction?: (event: any) => void;
    onEventListenerWorkbookPublished?: (event: any) => void;
    onEventListenerWorkbookPublishedAs?: (event: any) => void;
    onEventListenerWorkbookReadyToClose?: (event: any) => void;
}
export interface TableauVizCustomProps extends OptionalTableauVizProps {
    src: string;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            ["tableau-viz"]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & TableauVizCustomProps;
        }
    }
}
declare const _default: React.ForwardRefExoticComponent<TableauVizCustomProps & React.RefAttributes<any>>;
export default _default;
