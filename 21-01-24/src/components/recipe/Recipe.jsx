const Recipe = ({ recipe }) => {
  const { name, ingredients, instructions } = recipe;

  return (
    <>
      <h4>{name}</h4>
      <p>Ingredineti:</p>
      <ul>
        {ingredients.map((ingredient, key) => (
          <li key={key}>{ingredient}</li>
        ))}
      </ul>

      <p>Procedimento</p>
      <ol>
        {instructions.map((instruction, key) => (
          <li key={key}>{instruction}</li>
        ))}
      </ol>

      <hr />
    </>
  );
};

export default Recipe;
