import React from "react";
import ReactDOM from "react-dom";
import RecipesForDiets from "./RecipesForDiets";
import { BrowserRouter } from "react-router-dom";

describe("RecipesForDiets component", () => {
  it("RecipesForDiets renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <RecipesForDiets />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
