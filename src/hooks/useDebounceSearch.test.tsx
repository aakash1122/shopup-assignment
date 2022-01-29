import useDebounce from "./useDebouceSearch";
import { renderHook } from "@testing-library/react-hooks";

describe("should use debounce", () => {
  test("should not update and match value before 500ms", async () => {
    const { result } = renderHook(() => useDebounce("test", 500));
    expect(result.current).not.toBe("test");
  });

  test("should return 'test' after 500ms", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useDebounce("test", 500)
    );
    await waitForNextUpdate();
    expect(result.current).toBe("test");
  });
});
