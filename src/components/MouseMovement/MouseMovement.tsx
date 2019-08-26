import React, {useState, useEffect} from 'react'

const MouseMovement = () => {
  const [mouseX, setMouseX] = useState('0')
  const [mouseY, setMouseY] = useState('0')

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  })

  function handleMouseMove(e: any) {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  return (
    <div>
      <p>Mouse X position: {mouseX}</p>
      <p>Mouse Y position: {mouseY}</p>
    </div>
  );
};

export default MouseMovement;
