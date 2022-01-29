import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import useDebouceSearch from "../../hooks/useDebouceSearch";
import GifList from "./GifList";

const API_URL = "https://api.giphy.com/v1/gifs/search";
const fetchGif = async (query: string) => {
  try {
    const resp = await axios.get(API_URL, {
      params: {
        q: query,
        api_key: "veZ3NOnS5SyF2fE5zIp0C0EAZtB0sQhI",
      },
    });
    let data = resp?.data?.data?.map((gif: any) => gif.images.fixed_height.url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Gifs = () => {
  const [query, setQuery] = useState("fireworks");
  const debouncedQuery = useDebouceSearch(query, 1000);

  const { isLoading, data: gifs } = useQuery<string[], Error>(
    ["fetch-gif", debouncedQuery],
    () => fetchGif(query)
  );

  const handleSearch = (val: string) => {
    setQuery(val);
  };

  // take 16 results for 4*4 grid view
  const slicedGifs = gifs?.slice(0, 16) ?? [];

  return (
    <div>
      <div className="w-max mx-auto">
        <p>Search</p>
        <input
          name="search"
          placeholder="search with debounce"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          className="bg-gray-200 p-2 rounded"
          data-testid="searchField"
        />
      </div>
      {isLoading && <p>Loading</p>}
      <GifList data={slicedGifs} />
    </div>
  );
};

export default Gifs;
