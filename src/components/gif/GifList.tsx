import React from "react";

type Props = {
  data: string[];
};

const GifList = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4 overflow-hidden">
      {data &&
        data.map((gif, i) => (
          <img
            src={gif}
            alt="gif"
            key={gif}
            className="object-contain w-full"
            data-testid={`gif-${i + 1}`}
          />
        ))}
    </div>
  );
};

export default GifList;
