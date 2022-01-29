import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import GifList from "./GifList";
import Gifs from "./Gifs";

const queryclient = new QueryClient();

describe("test GIf component", () => {
  const data = [
    "https://media1.giphy.com/media/26tOZ42Mg6pbTUPHW/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media3.giphy.com/media/MViYNpI0wx69zX7j7w/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media0.giphy.com/media/oIY5zfbRGZ80c2a3TN/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media1.giphy.com/media/peAFQfg7Ol6IE/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media2.giphy.com/media/TmT51OyQLFD7a/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media1.giphy.com/media/AwcmOV28QPnck/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media0.giphy.com/media/YfMHLC2s6okBq/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media2.giphy.com/media/kolvlRnXh8Jj2/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media3.giphy.com/media/c1R3XcUXVWAFy/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media0.giphy.com/media/QMkPpxPDYY0fu/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media3.giphy.com/media/odsNxyQQDb29O/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media3.giphy.com/media/122XXtx3oumxBm/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media3.giphy.com/media/56Cl8ajYFrVtu/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media0.giphy.com/media/11lVFn0Di6NOIU/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media0.giphy.com/media/8HWtA1NjmgJNK/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
    "https://media3.giphy.com/media/xT0GqmfVFT8N9WIcms/200.gif?cid=31089d9c3pnv0qwm5s812q1hahhbil95r4qb0yugbj7yktx3&rid=200.gif&ct=g",
  ];

  test("render gif search field", async () => {
    render(
      <QueryClientProvider client={queryclient}>
        <Gifs />
      </QueryClientProvider>
    );

    const searchField = screen.getByTestId("searchField");
    expect(searchField).toBeInTheDocument();
  });

  test("type in the field", async () => {
    render(
      <QueryClientProvider client={queryclient}>
        <Gifs />
      </QueryClientProvider>
    );
    const searchField = screen.getByTestId("searchField");
    userEvent.type(searchField, "dogs");
    expect(searchField).toHaveValue("dogs");
  });

  test("should render 16 items", async () => {
    render(<GifList data={data} />);

    const numOfGIfItem = await screen.findAllByTestId("gif-", { exact: false });
    expect(numOfGIfItem).toHaveLength(16);
  });
});
