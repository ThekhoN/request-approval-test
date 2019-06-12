import React from "react";
import "./style.css";

const RequestHeader = ({ logoUrl, name, id }) => {
  return (
    <div className="request-header flex">
      <div className="logo">
        <img src={logoUrl} alt={name} />
      </div>
      <h2>
        Request for <span className="name">{name}</span> Service{" "}
        <span className="id">(#{id})</span>
      </h2>
    </div>
  );
};

export default RequestHeader;
