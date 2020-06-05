import React from "react";

import { Input, Table } from "antd";

export default function Search() {
  const [pokemonList, pokemonListSet] = React.useState([]);
  const [search, searchSet] = React.useState("Bul");

  React.useEffect(() => {
    import("data/pokemon").then((list) => {
      pokemonListSet(list.default);
    });
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <strong>{name.english}</strong>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "age",
      render: (type) => type.join(", "),
    },
    {
      title: "Attack",
      dataIndex: "base",
      key: "base.Attack",
      render: (base) => base.Attack,
    },
    {
      title: "Defense",
      dataIndex: "base",
      key: "base.Defense",
      render: (base) => base.Defense,
    },
    {
      title: "Sp. Attack",
      dataIndex: "base",
      key: "base.Sp. Attack",
      render: (base) => base["Sp. Attack"],
    },
    {
      title: "Sp. Defense",
      dataIndex: "base",
      key: "base.Sp. Defense",
      render: (base) => base["Sp. Defense"],
    },
    {
      title: "Speed",
      dataIndex: "base",
      key: "base.Speed",
      render: (base) => base.Speed,
    },
  ];

  return (
    <>
      {pokemonList && (
        <>
          <Input
            value={search}
            onChange={(evt) => searchSet(evt.target.value)}
            style={{ marginBottom: "1em" }}
          />
          <Table
            dataSource={pokemonList.filter(({ name: { english } }) =>
              english.toLowerCase().includes(search.toLowerCase())
            )}
            columns={columns}
          />
        </>
      )}
    </>
  );
}
