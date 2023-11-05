import { useState } from "react";
import Category from "./Components/Category";
import Header from "./Components/Header";
import { menu } from "./data.js";

const App = () => {
  const [currentCategory, setCurrentCategory] = useState("All");

  return (
    <main className="h-screen w-screen bg-gray-50 flex flex-col align-middle">
      <Header
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <Category currentCategory={currentCategory} />
    </main>
  );
};
export default App;
