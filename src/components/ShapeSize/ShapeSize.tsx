import React, { useState, useEffect, useRef } from "react";

const ShapeSize = () => {
  const [value, setValue] = useState("");
  const messageRef = useRef();

  useEffect(() => {
    // @ts-ignore
    const boundingBox = messageRef.current.getBoundingClientRect();
    console.log(boundingBox.width);
  });

  function handleInput(e: any) {
    setValue(e.target.value);
  }


  return (
    <div>
      <input value={value} onChange={handleInput} />
      <div>
        <span
          // @ts-ignore
          ref={messageRef}>{value}</span>
      </div>
    </div>
  );
};

export default ShapeSize;
