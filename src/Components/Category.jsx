import React, { useEffect } from "react";
import Menu from "./Menu.jsx";

import menu from "../data.js";

function Category(props) {
  let data;
  if (props.currentCategory.toLowerCase() === "all") {
    data = menu;
  } else {
    data = menu.filter((ele) => {
      return ele.category.toLowerCase() === props.currentCategory.toLowerCase();
    });
  }

  return (
    <section
      className="grid mx-12 max-sm:self-center"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(370px, 1fr))" }}
    >
      {data.map((ele) => {
        return <Menu props={ele} key={ele.id} />;
      })}
    </section>
  );
}

export default Category;
