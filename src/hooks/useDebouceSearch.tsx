import React from "react";

const useDebouceSearch = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState("");

  React.useEffect(() => {
    const handler: NodeJS.Timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebouceSearch;
