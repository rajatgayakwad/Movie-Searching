import React from "react";

const DropDown = ({ title, option, func }) => {
  return (
    <div className="select">
      <select name="format" defaultValue={0} onChange={func} id="format">
        <option value="0">{title}</option>

        {option.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select> 
    </div>
  );
};

export default DropDown;
