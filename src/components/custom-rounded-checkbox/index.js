import React from "react";
import "./style.css";

const CustomRoundedCheckbox = ({ onClick, isChecked, isReadonly }) => {
  if (isReadonly) {
    return (
      <div className="custom-rounded-checkbox read-only">
        <input type="checkbox" defaultChecked={isChecked} />
        <span />
      </div>
    );
  } else {
    return (
      <div className="custom-rounded-checkbox">
        <input type="checkbox" defaultChecked={isChecked} onChange={onClick} />
        <span
          onClick={onClick}
          tabIndex={1}
          onKeyUp={e => {
            if (e.keyCode === 13) {
              onClick();
            }
          }}
        />
      </div>
    );
  }
};

CustomRoundedCheckbox.defaultProps = {
  isReadonly: false,
  isChecked: false
};

export default CustomRoundedCheckbox;
