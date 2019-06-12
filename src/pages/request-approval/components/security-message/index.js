import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const SecurityMesage = ({ message }) => (
  <div className="security-message">
    <span>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMBAMAAABCcoqQAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBQTFRF+fr7++PL/rFg/6A8+u/j/qtS+unX/M2b/M2c/NKn/bx3/bx4/6ZI+97A/bds+uTMLPRn5gAAADlJREFUeJxjYBAyEmBgYAljC2FgYG9g6AST7TBysbGx8QYGIGFswGBsUwMibXlBpN0/EAkWB6lZAACwJg31nYnXLQAAAABJRU5ErkJggg=="
        alt="security-message"
      />{" "}
      Security Mesage
    </span>
    {message}
  </div>
);

SecurityMesage.defaultProps = {
  message:
    "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus."
};

SecurityMesage.propTypes = {
  message: PropTypes.string
};

export default SecurityMesage;
