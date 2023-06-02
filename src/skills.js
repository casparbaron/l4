import React from "react";
import "./styles.css";
import image from "./image";
import Card from "./card";

export default function Skills() {
  return (
    <div className="card-container">
      {image.map(imageItem => (
        <Card
          key={imageItem.key}
          title={imageItem.title}
          content={imageItem.content}
        />
      ))}
    </div>
  );
}
