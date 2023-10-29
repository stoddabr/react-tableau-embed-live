// All enum values made available to Embedding developers.
// Enums should be kept in alphabetical order.
// Most of them should match an enum on the server defined at
// workgroup/vqlweb/scriptsharp/src/ApiShared/PublicEnums.cs#L398:17

/**
 * device types available to use with @VizInterfaces:VizCreateOptions:device
 */
export enum DeviceType {
  Default = "default",
  Desktop = "desktop",
  Tablet = "tablet",
  Phone = "phone",
}

/**
 * All error codes used by the Embedding API.
 */
export enum EmbeddingErrorCodes {
  /**
   * The browser is not capable of supporting the Tableau JavaScript API
   */
  BrowserNotCapable = "browser-not-capable",
  /**
   * The permissions on a workbook or a view do not allow downloading the workbook.
   */
  DownloadWorkbookNotAllowed = "download-workbook-not-allowed",
  /**
   * Thrown when an error occurrs while attempting to perform a filter operation.
   */
  FilterCannotBePerformed = "filter-cannot-be-performed",
  /**
   * Thrown when attempting to switch to a sheet by index that does not exist in the workbook.
   */
  IndexOutOfRange = "index-out-of-range",
  /**
   * Thrown when an error occurrs within the Tableau JavaScript API. Contact Tableau Support.
   */
  InternalError = "internal-error",
  /**
   * An operation was attempted on a custom view that does not exist.
   */
  InvalidCustomViewName = "invalid-custom-view-name",
  /**
   * An invalid date was specified in a method that required a date parameter.
   */
  InvalidDateParameter = "invalid-date-parameter",
  /**
   * Either a filter operation was attempted on a field that does not exist in the data source, or the value supplied
   * in the filter operation is the wrong data type or format.
   */
  invalidFilterFieldNameOrValue = "invalid-filter-field-name",
  /**
   * A parameter is not the correct data type or format. The name of the parameter is specified in the Error.message
   * field.
   */
  InvalidParameter = "invalid-parameter",
  /**
   * A negative size was specified or the maxSize value is less than minSize in Sheet.changeSizeAsync().
   */
  InvalidSize = "invalid-size",
  /**
   * A behavior value was found that is not included in the SheetSizeBehavior enum.
   */
  InvalidSizeBehavior = "invalid-size-behavior",
  /**
   * A behavior other than SheetSizeBehavior.Automatic was specified in Sheet.changeSizeAsync() when the sheet is a
   * Worksheet instance.
   */
  InvalidSizeBehaviorOnWorksheet = "invalid-size-behavior-on-worksheet",
  /**
   * The URL specified in the Viz class constructor is not valid.
   */
  InvalidUrl = "invalid-url",
  /**
   * The maxSize field is missing in Sheet.changeSizeAsync() when specifying SheetSizeBehavior.AtMost.
   */
  MissingMaxSize = "missing-max-size",
  /**
   * The minSize field is missing in Sheet.changeSizeAsync() when specifying SheetSizeBehavior.AtLeast.
   */
  MissingMinSize = "missing-min-size",
  /**
   * The minSize or maxSize field is missing in Sheet.changeSizeAsync() when specifying SheetSizeBehavior.Range.
   */
  MissingMinMaxSize = "missing-min-max-size",
  /**
   * Can occur if the embedding app interacts with a parameter that has been removed from the worksheet.
   */
  MissingParameter = "missing-parameter",
  /**
   * The rangeN field is missing for a relative date filter of type LASTN or NEXTN.
   */
  MissingRangeNForRelativeDateFilters = "missing-range-n-for-relative-date-filters",
  /**
   * An attempt was made to access Sheet.getUrl() on a hidden sheet. Hidden sheets do not have URLs.
   */
  NoUrlForHiddenWorksheet = "no-url-for-hidden-worksheet",
  /**
   * One or both of the parentElement or the URL parameters is not specified in the Viz constructor.
   */
  NoUrlOrParentElementNotFound = "no-url-or-parent-element-not-found",
  /**
   * An operation was attempted on a sheet that is not active or embedded within the active dashboard.
   */
  NotActiveSheet = "not-active-sheet",
  /**
   * A required parameter was not specified, null, or an empty string/array.
   */
  NullOrEmptyParameter = "null-or-empty-parameter",
  /**
   * An operation was attempted on a sheet that does not exist in the workbook.
   */
  SheetNotInWorkbook = "sheet-not-in-workbook",
  /**
   * An operation is performed on a CustomView object that is no longer valid (it has been removed).
   */
  StaleDataReference = "stale-data-reference",
  /**
   * An unknown event name was specified in the call to Viz.addEventListener or Viz.removeEventListener.
   */
  UnsupportedEventName = "unsupported-event-name",
  /**
   * A Viz object has already been created as a child of the parentElement specified in the Viz constructor.
   */
  VizAlreadyInManager = "viz-already-in-manager",
  /**
   * Function is not supported in the embedding api.
   */
  ImplementationError = "wrong-implementation",
  /**
   * @NotImplemented
   */
  NotImplemented = "not-implemented",
  /**
   * Unknown error during event initialization
   */
  EventInitializationError = "event-initialization-error",
  /**
   * Version of the embedding api not supported by the version of tableau
   */
  IncompatibleVersionError = "incompatible-version-error",

  /**
   * Unknown {@link TableauDialogType} passed in to Viz.displayDialogAsync.
   */
  UnknownDialogType = "unknown-dialog-type",

  /**
   * Can occur if the API interacts with a filter that has been removed from the worksheet.
   * Can also occurs if a {@link FilterType} has not been implemented.
   */
  FilterMissingOrNotImplemented = "filter-missing-not-implemented",

  /**
   * Can occur if story point ids no longer match.
   */
  StoryPointIdMismatch = "storypoint-id-mismatch",
}

/**
 * formats available to use with displayStaticImage in @VizInterfaces
 */
export enum FileFormats {
  PDF = "pdf",
  PNG = "png",
}

export enum RevertVizSelection {
  All = "all",
  Axes = "axes",
  Filters = "filters",
  Sorts = "sorts",
  Shelves = "shelves",
}

export enum ToolbarButtons {
  Alerts = "alerts",
  AskData = "askData",
  CustomViews = "customViews",
  DataDetails = "dataDetails",
  Share = "share",
  Subscribe = "subscribe",
}

export enum Toolbar {
  Top = "top",
  Bottom = "bottom",
  Hidden = "hidden",
}

export enum SheetSizeBehavior {
  Automatic = "automatic",
  Exactly = "exactly",
  Range = "range",
  AtLeast = "atleast",
  AtMost = "atmost",
}

/**
 * Be careful when adding new event types. Extensions and embedding follow two different patterns on how events are named.
 * Events should be all lower case and without hypens or underscores.
 */

/**
 * Represents the type of tableau embedding event that can be listened for.
 */
export enum TableauEventType {
  /**
   * Raised when a custom view has finished loading. This event is raised after the callback function for {@link FirstInteractive} (if any) has been called.
   *
   * @category Viewing
   */
  CustomViewLoaded = "customviewloaded",

  /**
   * Raised when a custom view has been removed.
   *
   * @category Viewing
   */
  CustomViewRemoved = "customviewremoved",

  /**
   * Raised when a custom view has been saved (newly created or updated).
   *
   * @category Viewing
   */
  CustomViewSaved = "customviewsaved",

  /**
   * Raised when a custom view has been set as the default view for a workbook.
   *
   * @category Viewing
   */
  CustomViewSetDefault = "customviewsetdefault",

  /** Raised when the user clicks on the Edit Button.
   *
   * @category Viewing
   */
  EditButtonClicked = "editbuttonclicked",

  /** Raised when the user clicks on the Edit In Desktop Button.
   *
   * @category Authoring, Viewing
   */
  EditInDesktopButtonClicked = "editindesktopbuttonclicked",

  /** Raised when any filter has changed state. You can use this event type with TableauViz objects.
   *
   * @category Viewing
   */
  FilterChanged = "filterchanged",

  /** Fired when viz size is known
   *
   * @category Authoring, Viewing
   */
  FirstVizSizeKnown = "firstvizsizeknown",

  /** Fired when a viz first becomes interactive
   *
   * @category Authoring, Viewing
   */
  FirstInteractive = "firstinteractive",

  /** Raised when a custom mark context menu is clicked.
   *
   * @category Viewing
   */
  CustomMarkContextMenuEvent = "custommarkcontextmenu",

  /** The selected marks on a visualization have changed. You can use this event type with TableauViz objects.
   *
   * @category Viewing
   */
  MarkSelectionChanged = "markselectionchanged",

  /** A parameter has had its value modified. You can use this event type with [[Parameter]] objects.
   *
   * @category Viewing
   */
  ParameterChanged = "parameterchanged",

  /** Raised when a toolbar button or control becomes available or becomes unavailable.
   *
   * @category Viewing
   */
  ToolbarStateChanged = "toolbarstatechanged",

  /** Raised when the workbook is ready to close. This notification is sent when using embedded web authoring functionality.
   *
   * @category Authoring
   */
  WorkbookReadyToClose = "workbookreadytoclose",

  /** Raised when the workbook has been published. This notification is sent when using embedded web authoring functionality.
   *
   * @category Authoring
   */
  WorkbookPublished = "workbookpublished",

  /** Raised when "publish as" is successful. This notification is sent when using embedded web authoring functionality.
   *
   * @category Authoring
   */
  WorkbookPublishedAs = "workbookpublishedas",

  /**
   * Raised when a URL action occurs. See the {@link UrlActionEvent} class.
   *
   * @category Viewing
   */
  UrlAction = "urlaction",

  /**
   * Raised after a tab switch occurs (the active sheet has changed). Guarantees the viz object will be interactive after this.
   *
   * @category Viewing
   */
  TabSwitched = "tabswitched",
  /**
   *
   * Raised after a new story point becomes active.
   *
   * @category Viewing
   */
  StoryPointSwitched = "storypointswitched",

  /**
   * An event that signals an error while loading the webcomponent.
   */
  VizLoadError = "vizloaderror",
}

/**
 * Represents the location of a context menu where users can add external menu items.
 */
export enum ApiMenuType {
  /** External menu item will be injected in ubertip dialog */
  Ubertip = "ubertip",
}

/** You can use this type with [Viz](./Viz.html) object. */
export enum TableauDialogType {
  /**
   * Used to display the download PDF dialog.
   */
  ExportPDF = "export-pdf",
  /**
   * Used to display the download PowerPoint dialog.
   */
  ExportPowerPoint = "export-powerpoint",
  /**
   * Used to display the download Data dialog.
   */
  ExportData = "export-data",
  /**
   * Used to display the download CrossTab dialog.
   */
  ExportCrossTab = "export-cross-tab",
  /**
   * Used to display the download Workbook dialog.
   */
  ExportWorkbook = "export-workbook",
  /**
   * Used to display the Share dialog.
   */
  Share = "share",
}
