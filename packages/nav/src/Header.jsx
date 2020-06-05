import React from "react";
import { Layout } from "antd";

export default ({ children }) => {
  return (
    <Layout.Header>
      <h1 style={{ color: "white" }}>{children || "Pokemon"}</h1>
    </Layout.Header>
  );
};
