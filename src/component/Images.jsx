import React from "react";
import Image from "./Image";

const Images = ({ item }) => {
  return (
    <>
      {item.map((ele) => (
        <Image key={ele.id} item={ele} />
      ))}
    </>
  );
};

export default Images;
