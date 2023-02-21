import React from "react";
import { typeItem } from "./Interfaces";

export const Item: React.FC<typeItem> = ({ img, title, alt }) => {
  return (
    <>
      <li>
        <img src={img} alt={alt} />
        <span>{title}</span>
      </li>
    </>
  );
};
