import React from "react";

const TextReduction = ({ text, maxLength, className }) => {
  if (text.length <= maxLength)
    return (
      <p>
        {text} className={className}
      </p>
    );
  const truncatedText = text.substring(0, maxLength) + "...";
  return <div className={className}>{truncatedText}</div>;
};

export default TextReduction;
