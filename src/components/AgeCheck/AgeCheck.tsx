import React from "react";

type AgeProps = {
  age: number;
};

const AgeCheck: React.FC<AgeProps> = ({ age }) => {
  if (age >= 18) {
    return <p style={{ color: "green", fontWeight: "bold" }}>Adult content</p>;
  } else {
    return <p style={{ color: "red", fontWeight: "bold" }}>Age restriction</p>;
  }
};

export default AgeCheck;
