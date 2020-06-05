import React from "react";

import "antd/dist/antd.css";

import { Layout } from "antd";

import Header from "nav/Header";
import Search from "./Search";
import PokemonCarousel from "home/PokemonCarousel";

export default () => (
  <Layout style={{ minHeight: 800, maxWidth: 1200, margin: "auto" }}>
    <Header>Search Page</Header>
    <Layout.Content style={{ padding: "2em" }}>
      <Search />
      <PokemonCarousel />
    </Layout.Content>
  </Layout>
);
