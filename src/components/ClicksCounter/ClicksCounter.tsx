import React, { useState, useMemo } from "react";

const ClicksCounter = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const label = useMemo(() => {
    console.log("computing clicks", Date.now())
    return `${count} click${count === 1 ? '' : 's'}`
  }, [count])

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>
        Press Me
      </button>

      <p>{name} has {label}</p>
    </div>
  );
};

export default ClicksCounter;
