import React from "react";

const TextReduction = ({ text, maxLength }) => {
  if (text.length <= maxLength) return <p>{text}</p>;
  const truncatedText = text.substring(0, maxLength) + "...";
  return <div>{truncatedText}</div>;
};

export default TextReduction;
