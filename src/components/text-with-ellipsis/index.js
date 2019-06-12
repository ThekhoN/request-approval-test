import React from "react";
import "./style.css";

const TextWithEllipsis = ({ content }) => (
  <p className="text-with-ellipsis" title={content}>
    {content}
  </p>
);

export default TextWithEllipsis;
