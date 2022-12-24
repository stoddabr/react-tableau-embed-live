import { jest, test, expect, afterEach, beforeEach } from "@jest/globals";
import { renderHook, act } from "@testing-library/react-hooks";
import { SpiedFunction } from "jest-mock";

import useScript, {
  cachedScriptStatuses,
} from "../TableauEmbed/UseTableau/useScript";

const testSrc = "http://www.example.com/";
// optional, more realistic source
// const testSrc = "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";

// ignore react dom warnings tripped by react-hooks
let mockConsoleError: SpiedFunction;
beforeEach(() => {
  mockConsoleError = jest.spyOn(console, "error");
  mockConsoleError.mockImplementation((e) => {
    // filter react 18 error
    if (
      typeof e === "string" &&
      e.startsWith(
        "Warning: ReactDOM.render is no longer supported in React 18."
      )
    )
      return;
    // pipe other errors to warn with prefix
    console.warn("Error:", e);
  });
});
afterEach(() => {
  mockConsoleError.mockRestore();
});

// manually remove script
afterEach(() => {
  const bodyScripts = document.body.getElementsByTagName("script");
  [...bodyScripts].forEach((element) => {
    element.remove();
  });
});

// needed to clear cachedScriptStatuses Record cache
beforeEach(() => {
  if (cachedScriptStatuses === undefined) return;
  for (const key in cachedScriptStatuses) {
    if (cachedScriptStatuses.hasOwnProperty(key)) {
      delete cachedScriptStatuses[key];
    }
  }
});

// helpers

function getMatchingBodyScriptNodes() {
  const bodyScripts = document.body.getElementsByTagName("script");
  const bodyScriptNodes = [...bodyScripts].filter((el) => el.src === testSrc);
  return bodyScriptNodes;
}

// tests

test("should be idle if passed with option removeOnUnmount", async () => {
  const { result } = renderHook(() =>
    useScript(testSrc, { shouldPreventLoad: true })
  );
  expect(result.current.status).toBe("idle");
});

test("should set status to loading and add script node to body", async () => {
  const { result } = renderHook(() => useScript(testSrc));

  expect(result.current.status).toBe("loading");

  const bodyScripts = document.body.getElementsByTagName("script");
  const bodyScriptsSources = [...bodyScripts].map((el) => el.src);
  const isTestSourceIncludedInBody = bodyScriptsSources.includes(testSrc);
  expect(isTestSourceIncludedInBody).toBe(true);
});

test("should set status to loading if window is undefined", async () => {
  // @ts-ignore
  jest.spyOn(global, "window", "get").mockImplementationOnce(() => undefined);
  const { result } = renderHook(() => useScript(testSrc));

  expect(result.current.status).toBe("loading");
});

test("should return cached script status", async () => {
  const { result: res1 } = renderHook(() => useScript(testSrc));
  const { result: res2 } = renderHook(() => useScript(testSrc));

  // should match statuses
  expect(res1.current.status).toBe(res2.current.status);

  // should only be one
  const bodyScripts = document.body.getElementsByTagName("script");
  const bodyScriptsSources = [...bodyScripts].map((el) => el.src);
  const testSourcesIncludedInBody = bodyScriptsSources.filter(
    (src) => src === testSrc
  );
  expect(testSourcesIncludedInBody.length).toBe(1);
});

test("should remove on unmount", async () => {
  const { result, unmount } = renderHook(() =>
    useScript(testSrc, { removeOnUnmount: true })
  );

  // source should be there
  const bodyScriptsBefore = document.body.getElementsByTagName("script");
  const bodyScriptsSourcesBefore = [...bodyScriptsBefore].map((el) => el.src);
  const testSourcesIncludedInBodyBefore = bodyScriptsSourcesBefore.filter(
    (src) => src === testSrc
  );
  expect(testSourcesIncludedInBodyBefore.length).toBe(1);

  unmount();

  // should be gone
  const bodyScripts = document.body.getElementsByTagName("script");
  const bodyScriptsSources = [...bodyScripts].map((el) => el.src);
  const testSourcesIncludedInBody = bodyScriptsSources.filter(
    (src) => src === testSrc
  );
  expect(testSourcesIncludedInBody.length).toBe(0);
});

test("should see existing script and update status to match", () => {
  const testStatus = "test status";

  // create script element
  const scriptNode = document.createElement("script");
  scriptNode.type = "module";
  scriptNode.src = testSrc;
  scriptNode.async = true;
  scriptNode.setAttribute("data-status", testStatus);
  document.body.appendChild(scriptNode);

  const { result } = renderHook(() => useScript(testSrc));
  expect(result.current.status).toBe(testStatus);
});

test("should update state when load is triggered and test cached", () => {
  const { result } = renderHook(() => useScript(testSrc));

  // get source node
  const bsnInital = getMatchingBodyScriptNodes();
  expect(bsnInital.length).toBe(1);
  expect(result.current.status).toBe("loading");

  // trigger event listener to load
  act(() => {
    const loadEvent = new CustomEvent("load", {});
    bsnInital[0].dispatchEvent(loadEvent);
  });
  expect(result.current.status).toBe("ready");

  // check cache
  const { result: res2 } = renderHook(() => useScript(testSrc));
  expect(res2.current.status).toBe("ready");
  expect(result.current.status).toBe(res2.current.status);

  // ensure no double script
  expect(getMatchingBodyScriptNodes().length).toBe(1);
});

test("should update state when error is triggered", () => {
  const { result } = renderHook(() => useScript(testSrc));

  // get source node
  const bsnInital = getMatchingBodyScriptNodes();
  expect(bsnInital.length).toBe(1);
  expect(result.current.status).toBe("loading");

  const errMsg = "test error";
  act(() => {
    const errEvent = new CustomEvent("error") as any;
    errEvent.message = errMsg;
    bsnInital[0].dispatchEvent(errEvent);
  });
  expect(result.current.status).toBe("error");
  expect(result.current.errorMessage).toBe(errMsg);

  // ensure no double script
  expect(getMatchingBodyScriptNodes().length).toBe(1);
});

test("should update state when load then error is triggered even when cached", () => {
  const { result } = renderHook(() => useScript(testSrc));

  // get source node
  const bsnInital = getMatchingBodyScriptNodes();
  expect(bsnInital.length).toBe(1);
  expect(result.current.status).toBe("loading");

  // trigger event listener to load
  act(() => {
    const loadEvent = new CustomEvent("load", {});
    bsnInital[0].dispatchEvent(loadEvent);
  });
  expect(result.current.status).toBe("ready");

  // check cache
  const { result: res2 } = renderHook(() => useScript(testSrc));
  expect(res2.current.status).toBe("ready");

  // ensure no double script
  expect(getMatchingBodyScriptNodes().length).toBe(1);

  const errMsg = "test error";
  act(() => {
    const errEvent = new CustomEvent("error") as any;
    errEvent.message = errMsg;
    bsnInital[0].dispatchEvent(errEvent);
  });
  expect(result.current.status).toBe("error");
  expect(result.current.errorMessage).toBe(errMsg);

  // second component will not be passed error status
  // if it occurs after it is mounted
  // TODO: fix, maybe with with custom proxy
  expect(res2.current.status).toBe("ready");

  // ensure no double script
  expect(getMatchingBodyScriptNodes().length).toBe(1);
});
