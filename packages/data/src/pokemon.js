import pokemon from "./pokemon-data";

export default pokemon.map((p) => ({
  ...p,
  image: `http://localhost:3004/${p.name.english
    .toLowerCase()
    .replace(/\s+/, "-")}.jpg`,
}));
