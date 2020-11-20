// import { useState } from "react";

export const Square = (prop) => {
  // const [status, setStatus] = useState(null);
  const { className = "square", value, onClick } = prop;
  return (
    <div className={className}>
      <button type="button" className="square-item" onClick={() => onClick()}>
        {value}
      </button>
    </div>
  );
};
