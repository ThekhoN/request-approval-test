import React from "react";
import "./style.css";

const Actions = ({ handleApprove, handleDeny }) => {
  return (
    <div className="actions flex">
      <button className="approve" onClick={handleApprove}>
        Approve
      </button>
      <button className="deny" onClick={handleDeny}>
        Deny
      </button>
    </div>
  );
};

export default Actions;
