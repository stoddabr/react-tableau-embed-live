/**
 * wraps custom element
 *
 * for props:
 * @see https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_configure.htm
 *
 * for
 */
import * as React from "react";
import { TableauEventType } from "./ScrapedTableauTypes/Enums";
import { FilterUpdateType } from "./ScrapedTableauTypes/ExternalContract_Shared_Namespaces_Tablseu";
import { TableauVizRef } from "./types";

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
      ["tableau-viz"]: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > &
        TableauVizCustomProps;
    }
  }
}

function TableauViz(props: TableauVizCustomProps, ref: TableauVizRef) {
  const vizRef = React.useRef<any>(null);

  React.useImperativeHandle(ref, () => vizRef.current);

  // set event listeners
  React.useEffect(() => {
    if (vizRef && vizRef.current) {
      const viz = vizRef.current;
      // set optional event listener callbacks
      if (props.onEventListenerCustomMarkContextMenuEvent)
        viz.addEventListener(
          TableauEventType.CustomMarkContextMenuEvent,
          props.onEventListenerCustomMarkContextMenuEvent
        );
      if (props.onEventListenerCustomViewLoaded)
        viz.addEventListener(
          TableauEventType.CustomViewLoaded,
          props.onEventListenerCustomViewLoaded
        );
      if (props.onEventListenerCustomViewRemoved)
        viz.addEventListener(
          TableauEventType.CustomViewRemoved,
          props.onEventListenerCustomViewRemoved
        );
      if (props.onEventListenerCustomViewSaved)
        viz.addEventListener(
          TableauEventType.CustomViewSaved,
          props.onEventListenerCustomViewSaved
        );
      if (props.onEventListenerCustomViewSetDefault)
        viz.addEventListener(
          TableauEventType.CustomViewSetDefault,
          props.onEventListenerCustomViewSetDefault
        );
      if (props.onEventListenerEditButtonClicked)
        viz.addEventListener(
          TableauEventType.EditButtonClicked,
          props.onEventListenerEditButtonClicked
        );
      if (props.onEventListenerEditInDesktopButtonClicked)
        viz.addEventListener(
          TableauEventType.EditInDesktopButtonClicked,
          props.onEventListenerEditInDesktopButtonClicked
        );
      if (props.onEventListenerFilterChanged)
        viz.addEventListener(
          TableauEventType.FilterChanged,
          props.onEventListenerFilterChanged
        );
      if (props.onEventListenerFirstInteractive)
        viz.addEventListener(
          TableauEventType.FirstInteractive,
          props.onEventListenerFirstInteractive
        );
      if (props.onEventListenerFirstVizSizeKnown)
        viz.addEventListener(
          TableauEventType.FirstVizSizeKnown,
          props.onEventListenerFirstVizSizeKnown
        );
      if (props.onEventListenerMarkSelectionChanged)
        viz.addEventListener(
          TableauEventType.MarkSelectionChanged,
          props.onEventListenerMarkSelectionChanged
        );
      if (props.onEventListenerToolbarStateChanged)
        viz.addEventListener(
          TableauEventType.ToolbarStateChanged,
          props.onEventListenerToolbarStateChanged
        );
      if (props.onEventListenerTabSwitched)
        viz.addEventListener(
          TableauEventType.TabSwitched,
          props.onEventListenerTabSwitched
        );
      if (props.onEventListenerParameterChanged)
        viz.addEventListener(
          TableauEventType.ParameterChanged,
          props.onEventListenerParameterChanged
        );
      if (props.onEventListenerUrlAction)
        viz.addEventListener(
          TableauEventType.UrlAction,
          props.onEventListenerUrlAction
        );
      if (props.onEventListenerWorkbookPublished)
        viz.addEventListener(
          TableauEventType.WorkbookPublished,
          props.onEventListenerWorkbookPublished
        );
      if (props.onEventListenerWorkbookPublishedAs)
        viz.addEventListener(
          TableauEventType.WorkbookPublishedAs,
          props.onEventListenerWorkbookPublishedAs
        );
      if (props.onEventListenerWorkbookReadyToClose)
        viz.addEventListener(
          TableauEventType.WorkbookReadyToClose,
          props.onEventListenerWorkbookReadyToClose
        );
      return () => {
        if (props.onEventListenerCustomMarkContextMenuEvent)
          viz.removeEventListener(
            TableauEventType.CustomMarkContextMenuEvent,
            props.onEventListenerCustomMarkContextMenuEvent
          );
        if (props.onEventListenerCustomViewLoaded)
          viz.removeEventListener(
            TableauEventType.CustomViewLoaded,
            props.onEventListenerCustomViewLoaded
          );
        if (props.onEventListenerCustomViewRemoved)
          viz.removeEventListener(
            TableauEventType.CustomViewRemoved,
            props.onEventListenerCustomViewRemoved
          );
        if (props.onEventListenerCustomViewSaved)
          viz.removeEventListener(
            TableauEventType.CustomViewSaved,
            props.onEventListenerCustomViewSaved
          );
        if (props.onEventListenerCustomViewSetDefault)
          viz.removeEventListener(
            TableauEventType.CustomViewSetDefault,
            props.onEventListenerCustomViewSetDefault
          );
        if (props.onEventListenerEditButtonClicked)
          viz.removeEventListener(
            TableauEventType.EditButtonClicked,
            props.onEventListenerEditButtonClicked
          );
        if (props.onEventListenerEditInDesktopButtonClicked)
          viz.removeEventListener(
            TableauEventType.EditInDesktopButtonClicked,
            props.onEventListenerEditInDesktopButtonClicked
          );
        if (props.onEventListenerFilterChanged)
          viz.removeEventListener(
            TableauEventType.FilterChanged,
            props.onEventListenerFilterChanged
          );
        if (props.onEventListenerFirstInteractive)
          viz.removeEventListener(
            TableauEventType.FirstInteractive,
            props.onEventListenerFirstInteractive
          );
        if (props.onEventListenerFirstVizSizeKnown)
          viz.removeEventListener(
            TableauEventType.FirstVizSizeKnown,
            props.onEventListenerFirstVizSizeKnown
          );
        if (props.onEventListenerMarkSelectionChanged)
          viz.removeEventListener(
            TableauEventType.MarkSelectionChanged,
            props.onEventListenerMarkSelectionChanged
          );
        if (props.onEventListenerToolbarStateChanged)
          viz.removeEventListener(
            TableauEventType.ToolbarStateChanged,
            props.onEventListenerToolbarStateChanged
          );
        if (props.onEventListenerTabSwitched)
          viz.removeEventListener(
            TableauEventType.TabSwitched,
            props.onEventListenerTabSwitched
          );
        if (props.onEventListenerParameterChanged)
          viz.removeEventListener(
            TableauEventType.ParameterChanged,
            props.onEventListenerParameterChanged
          );
        if (props.onEventListenerUrlAction)
          viz.removeEventListener(
            TableauEventType.UrlAction,
            props.onEventListenerUrlAction
          );
        if (props.onEventListenerWorkbookPublished)
          viz.removeEventListener(
            TableauEventType.WorkbookPublished,
            props.onEventListenerWorkbookPublished
          );
        if (props.onEventListenerWorkbookPublishedAs)
          viz.removeEventListener(
            TableauEventType.WorkbookPublishedAs,
            props.onEventListenerWorkbookPublishedAs
          );
        if (props.onEventListenerWorkbookReadyToClose)
          viz.removeEventListener(
            TableauEventType.WorkbookReadyToClose,
            props.onEventListenerWorkbookReadyToClose
          );
      };
    }
    return () => {};
  }, [vizRef]);

  return <tableau-viz id="tableauViz" ref={vizRef} {...props}></tableau-viz>;
}

export default React.forwardRef(TableauViz);
