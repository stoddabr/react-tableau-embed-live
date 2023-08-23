import * as React from "react";
import TableauViz, {
  OptionalTableauVizProps,
  TableauVizCustomProps,
} from "../TableauViz";
import { TableauVizRef } from "../types";
import useScript from "./useScript";

type UseTableauStatus = "idle" | "loading" | "ready" | "error";

// mirrors react-query
// returning component instead of data
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
  isAuthoring?: boolean;
  optionalProperties?: OptionalTableauVizProps;
}

// maps api versions to api status
const cachedApiStatuses: Record<string, UseTableauStatus | undefined> = {};

/**
 * extract hostname of a url
 * will throw error if malformed
 */
function extractHostname(urlString: string): string {
  const url = new URL(urlString);
  return url.hostname;
}

/**
 * returns url for getting the tableau api
 * @see https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_get.html
 */
function buildTableauApiUrl(hostname: string, version?: string, min = false) {
  return `https://${hostname}/javascripts/api/tableau.embedding.${
    version ?? "3.latest"
  }${min ? ".min" : ""}.js`;
}

export default function useTableau(args: UseTableauParams): UseTableauReturn {
  const apiVersion = args.version ?? "latest";
  const tableauVizProps = React.useMemo<TableauVizCustomProps>(
    () => ({
      src: args.sourceUrl,
      isAuthoring: args.isAuthoring,
      ...args.optionalProperties,
    }),
    [args.sourceUrl, args.isAuthoring, args.optionalProperties]
  );

  const [status, setStatus] = React.useState<UseTableauStatus>(() => {
    if (!args.sourceUrl) return "idle";
    if (typeof window === "undefined") return "loading";
    return cachedApiStatuses[apiVersion] ?? "loading";
  });
  // used for return status objects
  const [errMsg, setErrMsg] = React.useState<string | undefined>();

  const hostname = extractHostname(args.sourceUrl);
  const apiUrl = buildTableauApiUrl(hostname, args.version, !!args.version);

  const { status: apiLoadStatus, errorMessage: apiErrorMessage } =
    useScript(apiUrl);

  // respond to api status loading change
  // then update exposed status
  React.useEffect(() => {
    // update exposed status
    setStatus(apiLoadStatus);

    // handle edge-cases:
    //  if error, expose error message
    if (status === "error") {
      setErrMsg(apiErrorMessage);
    }

    //  if idle clear error & component
    if (apiLoadStatus === "idle") {
      setErrMsg("");
    }
  }, [apiLoadStatus]);

  return {
    status,
    component: status === "ready" && (
      <TableauViz ref={args.ref} {...tableauVizProps} />
    ),
    errorMessage: errMsg,
    isIdle: status === "idle",
    isLoading: status === "loading",
    isError: status === "error",
    isSuccess: status === "ready",
  };
}
