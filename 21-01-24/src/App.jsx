import { useEffect, useState } from "react";

import "./App.css";
import Recipe from "./components/recipe";
import NewRequest from "./components/newRequest";
import RecipeList from "./components/recipeList";

function App() {
  const [recipesData, setRecipesData] = useState([]);
  const [recipesRequest, setRecipesRequest] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipesData(data.recipes));
  }, []);

  const reverseArray = [...recipesRequest].reverse();

  return (
    <>
      <NewRequest setRecipesRequest={setRecipesRequest} />
      <h2>Ricette richieste</h2>
      {recipesRequest.length > 0 &&
        reverseArray.map((recipe, key) => <p key={key}>- {recipe}</p>)}
      <RecipeList recipesData={recipesData} setRecipesData={setRecipesData} />
    </>
  );
}

export default App;
