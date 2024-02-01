import {
  DeviceType,
  TableauDialogType,
  TableauEventType,
  Toolbar,
} from "./Enums";
// import { SheetSize } from "./SheetInterfaces";
// import { Workbook } from "./WorkbookInterface";

/**
 * The names of the string constants you can use as HTML attributes for the <tableau-viz> web component.
 */
export enum VizAttributes {
  // shared attributes - keep these in sync with the shared attribute section in VizAuthoringAttributes
  // NOTE-hting-2021-12-07: We investigated a few ideas for extracting a VizAttributesBase but found that:
  //    * enums are not extensible in typescript
  //    * creating a type to fake enum extension made the documentation generated worse.
  // Given these options, we chose to have some duplication here for the sake of significantly more readable documentation.
  Src = "src",
  Width = "width",
  Height = "height",
  Token = "token",
  TouchOptimize = "touch-optimize",
  HideEditInDesktopButton = "hide-edit-in-desktop-button",
  SuppressDefaultEditBehavior = "suppress-default-edit-behavior",
  Debug = "debug",
  DisableVersionCheck = "disable-version-check",
  OnEditInDesktopButtonClicked = "onEditInDesktopButtonClicked",
  OnFirstVizSizeKnown = "onFirstVizSizeKnown",
  OnFirstInteractive = "onFirstInteractive",

  DisableUrlActionsPopups = "disable-url-actions",
  HideTabs = "hide-tabs",
  Toolbar = "toolbar",
  InstanceIdToClone = "instance-id-to-clone",
  Device = "device",
  HideEditButton = "hide-edit-button",
  OnEditButtonClicked = "onEditButtonClicked",
  OnFilterChanged = "onFilterChanged",
  OnCustomMarkContextMenuEvent = "onCustomMarkContextMenuEvent",
  OnMarkSelectionChanged = "onMarkSelectionChanged",
  OnParameterChanged = "onParameterChanged",
  OnToolbarStateChanged = "onToolbarStateChanged",
  OnUrlAction = "onUrlAction",
  OnTabSwitched = "onTabSwitched",
  OnCustomViewLoaded = "onCustomViewLoaded",
  OnCustomViewRemoved = "onCustomViewRemoved",
  OnCustomViewSaved = "onCustomViewSaved",
  OnCustomViewSetDefault = "onCustomViewSetDefault",
  OnStoryPointSwitched = "onStoryPointSwitched",
}

/**
 * The names of the string constants you can use as HTML attributes for the <tableau-authoring-viz> web component.
 */
export enum VizAuthoringAttributes {
  // shared attributes - Keep these in sync with the shared attribute section in VizAttributes. (see note on VizAttributes)
  Src = "src",
  Width = "width",
  Height = "height",
  Token = "token",
  TouchOptimize = "touch-optimize",
  HideEditInDesktopButton = "hide-edit-in-desktop-button",
  SuppressDefaultEditBehavior = "suppress-default-edit-behavior",
  Debug = "debug",
  DisableVersionCheck = "disable-version-check",
  OnEditInDesktopButtonClicked = "onEditInDesktopButtonClicked",
  OnFirstVizSizeKnown = "onFirstVizSizeKnown",
  OnFirstInteractive = "onFirstInteractive",

  OnWorkbookPublished = "onWorkbookPublished",
  OnWorkbookPublishedAs = "onWorkbookPublishedAs",
  OnWorkbookReadyToClose = "onWorkbookReadyToClose",
  HideCloseButton = "hide-close-button",
}

/**
 * The names of the string constants you can use as child tags for TableauViz and TableauAuthoringViz custom elements.
 */
export enum VizChildElements {
  /**
   * Contains a list of filter parameters. Available only in viewing mode.
   */
  VizFilter = "viz-filter",

  /**
   * Contains a name and value for a parameter. Available only in viewing mode.
   */
  VizParameter = "viz-parameter",

  /**
   * Contains a list of custom parameters.  Available in both viewing and authoring modes.
   */
  CustomParameter = "custom-parameter",
}

export enum VizChildElementAttributes {
  Field = "field",
  Value = "value",
  Name = "name",
}

/**
 * The interface for the top level Viz object.
 **/
export interface Viz extends VizSettings, VizLocalSettings, VizActions {
  /**
   * One Workbook is supported per visualization.
   */
  readonly workbook?: any;
}

/**
 * The interface for the top level Authoring Viz object.
 */
export interface AuthoringViz extends VizAuthoringSettings, VizLocalSettings {
  /**
   * Gets the visualization's current URL.
   */
  getCurrentSrcAsync(): Promise<string>;
}

/**
 * Partially implemented - Actions related to events and state of the viz
 */
export interface VizActions {
  /**
   * Indicates whether automatic updates are currently paused.
   */
  readonly automaticUpdatesArePaused: boolean;

  /**
   * Pause layout updates. This is useful if you are resizing the visualization or performing multiple calls that could affect the layout.
   */
  pauseAutomaticUpdatesAsync(): Promise<void>;

  /**
   * Resume layout updates.
   */
  resumeAutomaticUpdatesAsync(): Promise<void>;

  /**
   * Toggle layout updates.
   */
  toggleAutomaticUpdatesAsync(): Promise<void>;

  /**
   * Equivalent to clicking on the Revert All toolbar button, which restores the workbook to its starting state.
   */
  revertAllAsync(): Promise<void>;

  /**
   * Equivalent to clicking on the Refresh Data toolbar button.
   */
  refreshDataAsync(): Promise<void>;

  /**
   * Equivalent to clicking on Download > Image from the toolbar, which creates a PNG file of the current visualization.
   */
  exportImageAsync(): Promise<void>;

  /**
   * Display one of the export dialogs based on the dialogType parameter
   *
   * Throws an error if dialogType is invalid
   */
  displayDialogAsync(dialogType: TableauDialogType): Promise<void>;

  /**
   * Gets the visualization's current URL.
   */
  getCurrentSrcAsync(): Promise<string>;

  /**
   * Redoes the last action performed on a sheet.
   */
  redoAsync(): Promise<void>;

  /**
   * Undoes the last action performed on a sheet.
   */
  undoAsync(): Promise<void>;

  /**
   * Adds an event listener to the specified event.
   *
   * ```
   * async function getSelectedMarks(event) {
   *     const marksSelected = await event.detail.getMarksAsync();
   *     const numMarks = marksSelected.data[0].data.length;
   *     console.log(`${numMarks} marks Selected`);
   * }
   *
   * let viz = document.getElementById('tableauViz');
   * viz.addEventListener("markselectionchanged", getSelectedMarks);
   * ```
   */
  addEventListener(
    type: TableauEventType,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;

  /**
   * Removes an event listener from the specified event.
   *
   * ```
   * let viz = document.getElementById('tableauViz');
   * viz.removeEventListener("markselectionchanged", getSelectedMarks);
   * ```
   */
  removeEventListener(
    type: TableauEventType,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;

  /**
   * Use this method to filter the viz before initialization. If used after initialization, it will re-render the viz.
   * For filtering after initialization, use the other filtering methods, such as `applyFilterAsync`.
   *
   * If you add the same filter fields using the `addFilter()` method and by using the `<viz-filter>` element in the `<tableau-viz>` web component,
   * you might experience unexpected behavior.
   *
   * @param fieldName The name of the field to filter on.
   * @param value Single value or a list of comma separated values to filter on.
   *
   * ```
   * viz.addFilter('Region', 'Central,West');
   * ```
   */
  addFilter(fieldName: string, value: string): void;
}

export interface VizSize {
  /**
   * Gets the sheetSize record for the current sheet
   */
  readonly sheetSize: any;

  /**
   * Gets the height of the Tableau UI elements (the chrome) surrounding the view.
   */
  readonly chromeHeight: number;
}

/**
 * This interface represents all of the options for configuring a viz that are common between
 * viewing and authoring mode.
 */
interface VizSettingsShared {
  /**
   * The token used for authorization
   *
   * ```
   * <tableau-viz id="tableauViz" token="some-token-containing-clientId" />
   * <tableau-authoring-viz id="tableauViz" token="some-token-containing-clientId" />
   * ```
   */
  token?: string;

  /**
   * Indicates whether to touch optimize viz controls.
   *
   * ```
   * <tableau-viz id="tableauViz"  touch-optimize />
   * <tableau-authoring-viz id="tableauViz"  touch-optimize />
   * ```
   */
  touchOptimize?: boolean;

  /**
   * Indicates whether the Edit in Desktop button is hidden or visible.
   * If not specified, defaults to false, meaning that the Edit in Desktop button is visible.
   *
   * ```
   * <tableau-viz id="tableauViz" hide-edit-in-desktop-button>
   * <tableau-authoring-viz id="tableauViz" hide-edit-in-desktop-button>
   * ```
   */
  hideEditInDesktopButton?: boolean;

  /**
   * Indicates whether the default edit behavior is suppressed.
   * If not specified, defaults to false, meaning that the default edit behavior is not suppressed.
   *
   * ```
   * <tableau-viz id="tableauViz" suppress-default-edit-behavior>
   * <tableau-authoring-viz id="tableauViz" suppress-default-edit-behavior>
   * ```
   */
  suppressDefaultEditBehavior?: boolean;

  /**
   * Indicates whether the non-minified version of JavaScript is loaded. If specified (or set to true), the
   * non-minified version is used for both the local component and the Tableau Server visualization (if enabled).
   * If not specified (or set to false), the minified version of the JavaScript files are loaded.
   *
   * ```
   * <tableau-viz id="tableauViz"  debug />
   * <tableau-authoring-viz id="tableauViz"  debug />
   * ```
   */
  debug?: boolean;

  /**
   * An event raised when the user clicks on the Edit In Desktop Button. You can use this event type with TableauViz objects.
   * ```
   * <tableau-viz id="tableauViz" onEditInDesktopButtonClicked="onEditInDesktopButtonClickedHandler" />
   * <tableau-authoring-viz id="tableauViz" onEditInDesktopButtonClicked="onEditInDesktopButtonClickedHandler" />
   * ```
   */
  onEditInDesktopButtonClicked?: string;

  /**
   * An event raised when the size of the viz is known. You can use this event to perform tasks such as resizing
   * the elements surrounding the Viz object once the object's size has been established.
   * ```
   * <tableau-viz id="tableauViz"  "onFirstVizSizeKnown"="onFirstVizSizeKnownHandler" />
   * <tableau-authoring-viz id="tableauViz" onFirstVizSizeKnown="onFirstVizSizeKnownHandler" />
   * ```
   */
  onFirstVizSizeKnown?: string;

  /**
   * An event raised when the Viz object first becomes interactive. This is only raised once.
   * ```
   * <tableau-viz id="tableauViz"  "onFirstInteractive"="onFirstInteractiveHandler" />
   * <tableau-authoring-viz id="tableauViz" onFirstInteractive="onFirstInteractiveHandler" />
   * ```
   */
  onFirstInteractive?: string;
}

/**
 * The options for configuring a viz in view mode.
 */
export interface VizSettings extends VizSettingsShared {
  /**
   * Indicates whether to suppress the execution of URL actions. This option does not prevent the URL action
   * event from being raised. You can use this option to change what happens when a URL action occurs. If set
   * to true and you create an event listener for the URL_ACTION event, you can use an event listener
   * handler to customize the actions.
   *
   * ```
   * <tableau-viz id="tableauViz"  disable-url-actions />
   * ```
   */
  disableUrlActionsPopups?: boolean;

  /**
   * Indicates whether tabs are hidden or shown.
   *
   * ```
   * <tableau-viz id="tableauViz"  hide-tabs />
   * ```
   */
  hideTabs?: boolean;

  /**
   * Specifies the position of the toolbar, if it is shown. The values can be Toolbar.Top,
   * Toolbar.Bottom or Toolbar.Hidden.
   * If not specified, defaults to Toolbar.Bottom.
   *
   * ```
   * <tableau-viz id="tableauViz"  toolbar="hidden" />
   * ```
   */
  toolbar?: Toolbar;

  /**
   * Specifies a device layout for a dashboard, if it exists.
   * Values can be default, desktop, tablet, or phone.
   * If not specified, defaults to loading a layout based on the
   * smallest dimension of the hosting iframe element.
   *
   * ```
   * <tableau-viz id="tableauViz"  device="desktop" />
   * ```
   */
  device?: DeviceType;

  /**
   * Specifies the ID of an existing instance to make a copy (clone) of.
   * This is useful if the user wants to continue analysis of an existing visualization
   * without losing the state of the original. If the ID does not refer to an existing visualization,
   * the cloned version is derived from the original visualization.
   *
   * ```
   * <tableau-viz id="tableauViz"  instance-id-to-clone="id1" />
   * ```
   */
  instanceIdToClone?: string;

  /**
   * Indicates whether the Edit button is hidden or visible.
   * If not set, defaults to false, meaning that the Edit button is visible.
   * ```
   * <tableau-viz id="tableauViz" hide-edit-button>
   * ```
   */
  hideEditButton?: boolean;

  /**
   * An event raised when the user clicks on the Edit Button.
   * ```
   * <tableau-viz id="tableauViz" onEditButtonClicked="onEditButtonClickedHandler" />
   * ```
   */
  onEditButtonClicked?: string;

  /**
   * An event raised when any filter has changed state. You can use this event type with TableauViz objects.
   * ```
   * <tableau-viz id="tableauViz" onFilterChanged="onFilterChangedHandler" />
   * ```
   */
  onFilterChanged?: string;

  /**
   * An event raised when a custom mark context menu is clicked.
   * ```
   * <tableau-viz id="tableauViz" onCustomMarkContextMenuEvent="onCustomMarkContextMenuEventHandler" />
   * ```
   */
  onCustomMarkContextMenuEvent?: string;

  /**
   * An event raised when the selected marks on a visualization have changed. You can use this event type with TableauViz objects.
   * ```
   * <tableau-viz id="tableauViz" onMarkSelectionChanged="onMarkSelectionChangedHandler" />
   * ```
   */
  onMarkSelectionChanged?: string;

  /**
   * An event raised when a parameter has had its value modified. You can use this event type with [[Parameter]] objects.
   * ```
   * <tableau-viz id="tableauViz" onParameterChanged="onParameterChangedHandler" />
   * ```
   */
  onParameterChanged?: string;

  /**
   * An event raised when a toolbar button or control becomes available or becomes unavailable.
   * ```
   * <tableau-viz id="tableauViz" onToolbarStateChanged="onToolbarStateChangedHandler" />
   * ```
   */
  onToolbarStateChanged?: string;

  /**
   * An event raised when a URL action occurs. See the {@link UrlActionEvent} class.
   * ```
   * <tableau-viz id="tableauViz" onUrlAction="onUrlActionHandler" />
   * ```
   */
  onUrlAction?: string;

  /**
   * An event raised after a tab switch occurs (the active sheet has changed). Guarantees the viz object will be interactive after this.
   * ```
   * <tableau-viz id="tableauViz" onTabSwitched="onTabSwitchedHandler" />
   * ```
   */
  onTabSwitched?: string;

  /**
   * An event raised when a custom view has finished loading. This event is raised after the callback
   * function for {@link FirstInteractive} (if any) has been called.
   * ```
   * <tableau-viz id="tableauViz" onCustomViewLoaded="onCustomViewLoadedHandler" />
   * ```
   */
  onCustomViewLoaded?: string;

  /**
   * An event raised when a custom view has been removed.
   * ```
   * <tableau-viz id="tableauViz" onCustomViewRemoved="onCustomViewRemovedHandler" />
   * ```
   */
  onCustomViewRemoved?: string;

  /**
   * An event raised when a custom view has been saved (newly created or updated).
   * ```
   * <tableau-viz id="tableauViz" onCustomViewSaved="onCustomViewSavedHandler" />
   * ```
   */
  onCustomViewSaved?: string;

  /**
   * An event raised when a custom view has been set as the default view for a workbook.
   * ```
   * <tableau-viz id="tableauViz" onCustomViewSetDefault="onCustomViewSetDefaultHandler" />
   * ```
   */
  onCustomViewSetDefault?: string;

  /**
   * An event raised after a new story point becomes active.
   * ```
   * <tableau-viz id="tableauViz" onStoryPointSwitched="onStoryPointSwitchedHandler" />
   * ```
   */
  onStoryPointSwitched?: string;
}

/**
 * (Beta) Represents the options for configuring a viz in authoring mode.
 */
export interface VizAuthoringSettings extends VizSettingsShared {
  /**
   * Indicates whether the Close button is hidden or visible.
   * If not set, defaults to false, meaning that the Close button is visible.
   * ```
   * <tableau-authoring-viz id="tableauViz" hide-close-button />
   * ```
   */
  hideCloseButton?: boolean;

  /**
   * An event raised when the workbook has been published. This notification is sent when using embedded web authoring functionality.
   * ```
   * <tableau-authoring-viz id="tableauViz" onWorkbookPublished="onWorkbookPublishedHandler" />
   * ```
   */
  onWorkbookPublished?: string;

  /**
   * An event raised when "publish as" is successful. This notification is sent when using embedded web authoring functionality.
   * ```
   * <tableau-authoring-viz id="tableauViz" onWorkbookPublishedAs="onWorkbookPublishedAsHandler" />
   * ```
   */
  onWorkbookPublishedAs?: string;

  /**
   * An event raised when the workbook is ready to close. This notification is sent when using embedded web authoring functionality.
   * ```
   * <tableau-authoring-viz id="tableauViz" onWorkbookReadyToClose="onWorkbookReadyToCloseHandler" />
   * ```
   */
  onWorkbookReadyToClose?: string;
}

/**
 * User supplied options that do not get passed as request parameters to load a Tableau viz
 */
export interface VizLocalSettings {
  /**
   * The viz src
   */
  src?: string | null;

  /**
   * Represents width in pixels
   * Can be any valid CSS size specifier. If not specified, defaults to the published width of the view.
   */
  width?: string | number;

  /**
   * Represents height in pixels
   * Can be any valid CSS size specifier. If not specified, defaults to the published height of the view.
   */
  height?: string | number;
}

export interface FilterParameters {
  field: string;
  value: string;
}

/**
 * VizParameters are used to set Parameter values on the viz.
 *
 * * ```
 * <tableau-viz id="tableauViz">
 *  <viz-parameter name="parameter-name" value="parameter-value"></viz-parameter>
 * </tableau-viz>
 * ```
 *
 */
export interface VizParameter {
  /**
   * Name of the parameter to be set.
   */
  name: string;

  /**
   * Valid value for the parameter being set.
   */
  value: string;
}

/**
 * CustomParameters are used to pass along settings, information, etc., that aren't exposed on the
 * tableau-viz element. CustomParameters will override attributes, or filters, set on the tableau-viz element.
 *
 * * ```
 * <tableau-viz id="tableauViz">
 *  <custom-parameter name="parameter-name" value="parameter-value"></custom-parameter>
 * </tableau-viz>
 * ```
 *
 */
export interface CustomParameter {
  /**
   * Name of the parameter to be set.
   */
  name: string;

  /**
   * Valid value for the parameter being set.
   */
  value: string;
}

export interface VizLoadErrorEvent extends Event {
  detail: {
    /**
     * The error code
     */
    _errorCode:
      | "auth-failed"
      | "browser-not-capable"
      | "download-workbook-not-allowed"
      | "event-initialization-error"
      | "filter-cannot-be-performed"
      | "filter-missing-not-implemented"
      | "wrong-implementation"
      | "incompatible-version-error"
      | "index-out-of-range"
      | "internal-error"
      | "invalid-custom-view-name"
      | "invalid-date-parameter"
      | "invalid-parameter"
      | "invalid-size"
      | "invalid-size-behavior"
      | "invalid-size-behavior-on-worksheet"
      | "invalid-url"
      | "missing-max-size"
      | "missing-min-max-size"
      | "missing-min-size"
      | "missing-parameter"
      | "missing-range-n-for-relative-date-filters"
      | "no-url-for-hidden-worksheet"
      | "no-url-or-parent-element-not-found"
      | "not-active-sheet"
      | "not-implemented"
      | "null-or-empty-parameter"
      | "sheet-not-in-workbook"
      | "stale-data-reference"
      | "storypoint-id-mismatch"
      | "unknown-auth-error"
      | "unknown-dialog-type"
      | "unsupported-event-name"
      | "viz-already-in-manager"
      | "invalid-filter-field-name";
    /**
     * The error message
     */
    _message: string;
  };
}
