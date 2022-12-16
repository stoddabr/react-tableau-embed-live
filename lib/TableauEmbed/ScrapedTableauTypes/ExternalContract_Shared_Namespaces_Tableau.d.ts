/**
 * The tableau namespace exists for organization and to avoid polluting
 * the global namespace. It contains no constructs other than sub-namespaces and the Tableau enumerations.
 */
export declare enum AnalyticsObjectType {
    Cluster = "cluster",
    Forecast = "forecast",
    TrendLine = "trend-line"
}
export declare enum AnnotationType {
    Mark = "mark",
    Point = "point",
    Area = "area"
}
export declare enum ColumnType {
    Discrete = "discrete",
    Continuous = "continuous"
}
export declare enum ClassNameKey {
    WorksheetTitle = "tableau-worksheet-title",
    Worksheet = "tableau-worksheet",
    Tooltip = "tableau-tooltip",
    StoryTitle = "tableau-story-title",
    DashboardTitle = "tableau-dashboard-title"
}
/**
 * What the object represents in a dashboard.
 */
export declare enum DashboardObjectType {
    Blank = "blank",
    Worksheet = "worksheet",
    QuickFilter = "quick-filter",
    ParameterControl = "parameter-control",
    PageFilter = "page-filter",
    Legend = "legend",
    Title = "title",
    Text = "text",
    Image = "image",
    WebPage = "web-page",
    Extension = "extension"
}
/**
 * Enum that represents the visibility state of a dashboard object.
 * @since 1.7.0
 */
export declare enum DashboardObjectVisibilityType {
    /** Used for turning on the visibility of a dashboard object.*/
    Show = "show",
    /** Used for turning off the visibility of a dashboard object.*/
    Hide = "hide"
}
/**
 * The different types of data a value can have
 */
export declare enum DataType {
    String = "string",
    Int = "int",
    Float = "float",
    Bool = "bool",
    Date = "date",
    DateTime = "date-time",
    Spatial = "spatial"
}
/**
 * Enum that represents the changes that occur to a dashboard object.
 */
export declare enum DashboardLayoutChange {
    /** A dashboard object was added */
    Added = "added",
    /** A dashboard object was removed */
    Removed = "removed",
    /** A dashboard object's floating state changed */
    IsFloatingChanged = "is-floating-changed",
    /** A dashboard object's visibility changed */
    IsVisibleChanged = "is-visible-changed",
    /** A dashboard object's position changed */
    PositionChanged = "position-changed",
    /** A dashboard object's size changed */
    SizeChanged = "size-changed",
    /** A dashboard object was renamed */
    NameChanged = "name-changed"
}
/**
 * Valid date ranges for a relative date filter.
 */
export declare enum DateRangeType {
    Last = "last",
    LastN = "last-n",
    Next = "next",
    NextN = "next-n",
    Current = "current",
    ToDate = "to-date"
}
/**
 * Enum that represents the types of dialog popup styles.
 */
export declare enum DialogStyle {
    Window = "window",
    Modal = "modal",
    Modeless = "modeless"
}
export declare enum EncodingType {
    Column = "column",
    Row = "row",
    Page = "page",
    Filter = "filter",
    MarksType = "marks-type",
    MeasureValues = "measure-values",
    Color = "color",
    Size = "size",
    Label = "label",
    Detail = "detail",
    Tooltip = "tooltip",
    Shape = "shape",
    Path = "path",
    Angle = "angle"
}
/**
 *  Type of aggregation on a field.
 */
export declare enum FieldAggregationType {
    Sum = "sum",
    Avg = "avg",
    Min = "min",
    Max = "max",
    Stdev = "stdev",
    Stdevp = "stdevp",
    Var = "var",
    Varp = "varp",
    Count = "count",
    Countd = "countd",
    Median = "median",
    Attr = "attr",
    None = "none",
    Year = "year",
    Qtr = "qtr",
    Month = "month",
    Day = "day",
    Hour = "hour",
    Minute = "minute",
    Second = "second",
    Week = "week",
    Weekday = "weekday",
    MonthYear = "month-year",
    Mdy = "mdy",
    End = "end",
    TruncYear = "trunc-year",
    TruncQtr = "trunc-qtr",
    TruncMonth = "trunc-month",
    TruncWeek = "trunc-week",
    TruncDay = "trunc-day",
    TruncHour = "trunc-hour",
    TruncMinute = "trunc-minute",
    TruncSecond = "trunc-second",
    Quart1 = "quart1",
    Quart3 = "quart3",
    Skewness = "skewness",
    Kurtosis = "kurtosis",
    InOut = "in-out",
    User = "user"
}
/**
 * Role of a field.
 */
export declare enum FieldRoleType {
    Dimension = "dimension",
    Measure = "measure",
    Unknown = "unknown"
}
/**
 * An enumeration of the valid types of filters that can be applied.
 */
export declare enum FilterType {
    Categorical = "categorical",
    Range = "range",
    Hierarchical = "hierarchical",
    RelativeDate = "relative-date"
}
/**
 * The different update types for applying filter
 */
export declare enum FilterUpdateType {
    Add = "add",
    All = "all",
    Replace = "replace",
    Remove = "remove"
}
/**
 * The domain type for a filter
 */
export declare enum FilterDomainType {
    /**
     * The domain values that are relevant to the specified filter
     * i.e. the domain is restricted by a previous filter
     */
    Relevant = "relevant",
    /**
     * list of all possible domain values from database
     */
    Database = "database"
}
/**
 * The option for specifying which values to include for filtering
 * Indicates what to do with null values for a given filter or mark selection call.
 */
export declare enum FilterNullOption {
    NullValues = "null-values",
    NonNullValues = "non-null-values",
    AllValues = "all-values"
}
/**
 * Enum that serves as a filter on the DataValues returned from `getSummaryDataAsync`,
 * `getUnderlyingTableDataAsync` and `getLogicalTableDataAsync`.
 * This is an optimization of returned data values only. Tableau versions prior to 2021.2
 * will pass the data across and populate the DataValue properties.
 * Please note that all properties not requested will be `undefined` in the DataValue results.
 * @since 1.5.0
 */
export declare enum IncludeDataValuesOption {
    /** DataValues will include all properties.*/
    AllValues = "all-values",
    /** DataValues will only include value and nativeValue properties.*/
    OnlyNativeValues = "only-native-values",
    /** DataValues will only include formattedValue properties. */
    OnlyFormattedValues = "only-formatted-values"
}
/**
 * Type of mark for a given marks card in a viz.
 */
export declare enum MarkType {
    Bar = "bar",
    Line = "line",
    Area = "area",
    Square = "square",
    Circle = "circle",
    Shape = "shape",
    Text = "text",
    Map = "map",
    Pie = "pie",
    GanttBar = "gantt-bar",
    Polygon = "polygon"
}
/**
 * An enumeration describing the different types of allowable values.
 * This is used for restricting the domain of a parameter
 */
export declare enum ParameterValueType {
    All = "all",
    List = "list",
    Range = "range"
}
/**
 * Date period used in filters and in parameters.
 */
export declare enum PeriodType {
    Years = "years",
    Quarters = "quarters",
    Months = "months",
    Weeks = "weeks",
    Days = "days",
    Hours = "hours",
    Minutes = "minutes",
    Seconds = "seconds"
}
export declare enum QuickTableCalcType {
    RunningTotal = "running-total",
    Difference = "difference",
    PercentDifference = "percent-difference",
    PercentOfTotal = "percent-of-total",
    Rank = "rank",
    Percentile = "percentile",
    MovingAverage = "moving-average",
    YTDTotal = "ytd-total",
    CompoundGrowthRate = "compound-growth-rate",
    YearOverYearGrowth = "year-over-year-growth",
    YTDGrowth = "ytd-growth",
    Undefined = "undefined"
}
/**
 * Enum for specifying the selection type for select marks api.
 */
export declare enum SelectionUpdateType {
    Replace = "select-replace",
    Add = "select-add",
    Remove = "select-remove"
}
/**
 * The type of sheet a [[Sheet]] object represents
 */
export declare enum SheetType {
    Dashboard = "dashboard",
    Story = "story",
    Worksheet = "worksheet"
}
export declare enum SortDirection {
    Increasing = "increasing",
    Decreasing = "decreasing"
}
export declare enum TrendLineModelType {
    Linear = "linear",
    Logarithmic = "logarithmic",
    Exponential = "exponential",
    Polynomial = "polynomial"
}
/**
 * Enum that represents the replay speed of an animation.
 * @since 1.7.0
 */
export declare enum ReplaySpeedType {
    /** Used for setting the replay speed of an animation to 0.5x.*/
    Slow = "slow",
    /** Used for setting the replay speed of an animation to 1.0x.*/
    Normal = "normal",
    /** Used for setting the replay speed of an animation to 2.0x.*/
    Fast = "fast"
}
/**
 * Enum that represents the selection state of a level in a hierarchical filter
 * @since Extensions 1.10.0
 */
export declare enum HierarchicalLevelSelectionState {
    AllSelected = "all-selected",
    NoneSelected = "none-selected",
    SomeSelected = "some-selected",
    UnknownSelected = "unknown-selected"
}
/**
 * ZoneVisibilityType
 * @deprecated use DashboardObjectVisibilityType
 */
export declare type ZoneVisibilityType = DashboardObjectVisibilityType;
export declare const ZoneVisibilityType: {
    Show: DashboardObjectVisibilityType.Show;
    Hide: DashboardObjectVisibilityType.Hide;
};
