import React from "react";
import { Carousel } from "antd";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";

import PokemonCard from "./PokemonCard";

export default () => {
  const carousel = React.useRef(null);
  const [pokemonList, pokemonListSet] = React.useState([]);

  React.useEffect(() => {
    import("data/pokemon").then((list) => {
      pokemonListSet(list.default);
    });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50px calc(100% - 100px) 50px",
        border: "10px dashed green",
      }}
    >
      <CaretLeftFilled
        onClick={() => carousel.current.prev()}
        fill="black"
        style={{
          fontSize: 50,
          marginTop: 100,
        }}
      />
      <Carousel slidesToShow={4} ref={carousel}>
        {pokemonList.slice(0, 10).map((product) => (
          <div key={product.name}>
            <PokemonCard {...product} />
          </div>
        ))}
      </Carousel>
      <CaretRightFilled
        onClick={() => carousel.current.next()}
        fill="black"
        style={{
          fontSize: 50,
          marginTop: 100,
        }}
      />
    </div>
  );
};
