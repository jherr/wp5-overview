import React from "react";
import { Card } from "antd";

const { Meta } = Card;

export default ({ name, image, type }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={name.english}
          src={image}
          style={{
            maxHeight: 150,
            overflow: "hidden",
            objectFit: "contain",
          }}
        />
      }
    >
      <Meta title={name.english} description={type.join(", ")} />
    </Card>
  );
};
