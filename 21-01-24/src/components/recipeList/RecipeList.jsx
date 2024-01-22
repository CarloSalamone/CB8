import Recipe from "../recipe/Recipe";

const RecipeList = ({ recipesData, setRecipesData }) => {
  const onHandleClick = () => {
    setRecipesData([]);
  };

  return (
    <>
      <button onClick={onHandleClick}>Svuota lista</button>
      {recipesData.map((recipe, key) => (
        <Recipe key={key} recipe={recipe} />
      ))}
    </>
  );
};

export default RecipeList;
