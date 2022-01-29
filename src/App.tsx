import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Form from "./components/form/Form";
import useDebouceSearch from "./hooks/useDebouceSearch";

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

function App() {
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
  const slicedGifs = gifs?.slice(0, 16);

  return (
    <div className="flex flex-col justify-center items-center w-screen py-4">
      <Form />
      <div>
        <div className="w-max mx-auto">
          <p>Search</p>
          <input
            name="search"
            placeholder="search with debounce"
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            className="bg-gray-200 p-2 rounded"
          />
        </div>
        {isLoading && <p>Loading</p>}
        <div className="grid grid-cols-4 gap-4 mt-4 overflow-hidden">
          {slicedGifs &&
            slicedGifs.map((gif) => (
              <img
                src={gif}
                alt="gif"
                key={gif}
                className="object-contain w-full"
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
