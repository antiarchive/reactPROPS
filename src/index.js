import React from "react";
import ReactDOM from "react-dom";
import Contact from "./contact";

ReactDOM.render(
  <div>
    <Contact
      name="contact1"
      photo="https://picsum.photos/200/300"
      number="1234565"
      email="contact1@gmail.com"
    />
    <Contact
      name="contact2"
      photo="https://picsum.photos/200/300"
      number="8349837"
      email="contact2@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
