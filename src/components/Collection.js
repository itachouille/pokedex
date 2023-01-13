import Card from "./Card";

const Collection = (props) => {
  const { pokemon } = props;

  return (
    <div className="collection-container">
      {pokemon.map((poke) => {
        return (
          <Card
            key={poke.id}
            id={poke.id}
            name={poke.name}
            type={poke.types}
            image={poke.sprites.other.dream_world.front_default}
            stats={poke.stats}
          />
        );
      })}
    </div>
  );
};

export default Collection;
