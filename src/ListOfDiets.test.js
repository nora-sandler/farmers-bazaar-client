import React from "react";
import ReactDOM from "react-dom";
import ListOfDiets from "./ListOfDiets";
import { BrowserRouter } from "react-router-dom";

describe("ListOfDiets component", () => {
  it("ListOfDiets renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <ListOfDiets />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
