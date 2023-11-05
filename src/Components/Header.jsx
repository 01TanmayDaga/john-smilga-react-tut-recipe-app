import React from "react";

function Header(props) {
  console.log(props);

  return (
    <section className="text-center mb-4">
      <div className="text-center">
        <h1 className="text-orange-400 text-4xl font-bold">Our Menu</h1>
        <div className="border-t-4 border-t-orange-500 bg-gray-50 w-24 mx-auto mt-2"></div>
      </div>

      <div className="mt-8 flex flex-row justify-evenly">
        <ul className="flex flex-row text-white [&>button]:bg-orange-400 gap-3 [&>button]:rounded-md [&>button]:px-4 py-2 [&>button]:cursor-pointer">
          <button
            onClick={() => {
              props.setCurrentCategory("All");
            }}
          >
            All
          </button>
          <button onClick={() => props.setCurrentCategory("Breakfast")}>
            Breakfast
          </button>
          <button onClick={() => props.setCurrentCategory("Lunch")}>
            Lunch
          </button>
          <button onClick={() => props.setCurrentCategory("Shakes")}>
            Shakes
          </button>
        </ul>
      </div>
    </section>
  );
}

export default Header;
