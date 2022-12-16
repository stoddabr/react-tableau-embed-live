import * as React from "react";
import { OptionalTableauVizProps } from "../TableauViz";
import { TableauVizRef } from "../types";
declare type UseTableauStatus = "idle" | "loading" | "ready" | "error";
export interface UseTableauReturn {
    status: UseTableauStatus;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    isIdle: boolean;
    errorMessage: string | undefined;
    component: React.ReactNode;
}
export interface UseTableauParams {
    ref: TableauVizRef;
    sourceUrl: string;
    version?: string;
    optionalProperties?: OptionalTableauVizProps;
}
export default function useTableau(args: UseTableauParams): UseTableauReturn;
export {};
