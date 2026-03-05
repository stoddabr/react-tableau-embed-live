/**
 * @jest-environment node
 *
 * Tests SSR behavior of useScript where typeof window === "undefined".
 * Must run in node environment since jsdom v26+ marks window as non-configurable.
 */
import { test, expect } from "@jest/globals";
import { renderHook } from "@testing-library/react-hooks/server";
import useScript from "../TableauEmbed/UseTableau/useScript";

const testSrc = "http://www.example.com/";

test("should set status to loading if window is undefined", () => {
  const { result } = renderHook(() => useScript(testSrc));
  expect(result.current.status).toBe("loading");
});
