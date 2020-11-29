import React from "react";
import ReactDOM from "react-dom";
import AddRecipes from "./AddRecipes";
import { BrowserRouter } from "react-router-dom";

describe("AddRecipes component", () => {
  it("AddRecipes renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <AddRecipes />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
