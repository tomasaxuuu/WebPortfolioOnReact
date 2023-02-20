import React from "react";
import { IItem } from "./Interfaces";

export const Item: React.FC<IItem> = ({ img, title }: IItem) => {
  return (
    <>
      <li>
        <img src={img} />
        <span>{title}</span>
      </li>
    </>
  );
};
