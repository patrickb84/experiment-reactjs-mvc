import GenreController from "../../Controllers/GenreController";

const GenreIndex = () => {
  const { getCollection, handleSelect } = GenreController;

  return (
    <div>
      <h1>Genre Index</h1>
      {getCollection().map((g) => {
        return (
          <div key={g.id}>
            <h5>{g.label}</h5>
            {/* here button can be turned into its own component, just import handSelect() in that .js, no need to pass it down */}
            <button onClick={() => handleSelect(id)}>Select</button>
          </div>
        );
      })}
    </div>
  );
};

export default GenreIndex;
