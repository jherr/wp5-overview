import React from "react";
import { Layout, Divider, Row, Col } from "antd";

const Header = React.lazy(() => import("nav/Header"));

import "./index.less";

import PokemonCarousel from "./PokemonCarousel";

const SideCard = ({ name, image, children }) => (
  <Row
    style={{
      background: "white",
      border: "1px solid #ddd",
    }}
  >
    <Col span={12}>
      <img
        alt={name}
        src={image}
        style={{
          maxHeight: 300,
          width: "100%",
          overflow: "hidden",
          objectFit: "contain",
        }}
      />
    </Col>
    <Col span={12} style={{ padding: "1em" }}>
      {children}
    </Col>
  </Row>
);

function App() {
  const [pokemonList, pokemonListSet] = React.useState([]);

  React.useEffect(() => {
    import("data/pokemon").then((list) => {
      pokemonListSet(list.default);
    });
  }, []);

  return (
    <Layout style={{ minHeight: 800, maxWidth: 1200, margin: "auto" }}>
      <React.Suspense fallback={<div />}>
        <Header>Home Page</Header>
      </React.Suspense>
      <Layout.Content style={{ padding: "2em" }}>
        {pokemonList && (
          <Row gutter={6}>
            <Col span={12}>
              <SideCard
                {...pokemonList.find(
                  ({ name }) => name.english === "Volcanion"
                )}
              >
                <h3>Volcanion</h3>
                <p>
                  Volcanion is a primarily maroon, quadruped Pokémon. It has
                  pointed ears with blue interiors, bright blue eyes, yellow
                  markings over and behind its eyes that resemble eyebrows and
                  eyelashes, a pointed, yellow mandible, and a spike-like
                  protrusion on each cheek.
                </p>
              </SideCard>
            </Col>
            <Col span={12}>
              <SideCard
                {...pokemonList.find(
                  ({ name }) => name.english === "Primarina"
                )}
              >
                <h3>Primarina</h3>
                <p>
                  Primarina is a marine Pokémon that resembles a cross between a
                  sea lion and a mermaid. Most of its body is white, but it has
                  a long, fish-like tail. It has a long snout with a round, pink
                  nose, bright blue eyes with long white eyelashes, and long
                  light blue hair trailing off the back of its head.{" "}
                </p>
              </SideCard>
            </Col>
          </Row>
        )}
        <Divider orientation="left">Pokemon You'll Like</Divider>
        <PokemonCarousel />
      </Layout.Content>
    </Layout>
  );
}

export default App;
