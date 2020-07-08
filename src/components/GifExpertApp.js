import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState([]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "Death Note"]);
  //   };

  return (
    <div>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((cat) => {
          return <GifGrid key={cat} category={cat} />;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
