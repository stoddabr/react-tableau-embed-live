export declare type UseScriptStatus = "idle" | "loading" | "ready" | "error";
export interface UseScriptOptions {
    shouldPreventLoad?: boolean;
    removeOnUnmount?: boolean;
}
interface UseScriptReturns {
    status: UseScriptStatus;
    errorMessage?: string;
}
declare function useScript(src: string | null, options?: UseScriptOptions): UseScriptReturns;
export default useScript;
