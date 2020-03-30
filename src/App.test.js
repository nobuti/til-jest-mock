import React from "react";
import { render, act } from "@testing-library/react";

import App from "./App";
//import { getPokemons } from "./api";

//jest.mock("./api");

describe("App", () => {
  it("render properly", async () => {
    /*getPokemons.mockResolvedValue({
      results: [{ name: "Wadus" }, { name: "Frodo" }],
});*/

    //let debug, getByText;

    /*await act(async () => {
      ({ debug, getByText } = render(<App />));
        });*/
    const { debug } = render(<App />);
    debug();
    //expect(getByText("Wadus")).toBeDefined();
  });
});
