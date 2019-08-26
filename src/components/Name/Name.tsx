import React, {useState} from 'react';

const useInput = (initialValue: string) => {
  const [name, changeName] = useState('')
  const changeNameWithInput = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    changeName(event.target.value)
  }

  return [name, changeNameWithInput]
}

const Name: React.FC = () => {
  const [name, changeName] = useInput('')
  const [color, changeColor] = useInput('')

  return (
    <div>
      <p>What is your name?</p>
      <input type="text"
        // @ts-ignore
             value={name}
        // @ts-ignore
             onChange={changeName}/>
      <p>{name && `Hello, ${name}!`}</p>
      <p>What's your favorite color?</p>
      <input
        // @ts-ignore
        value={color}
        // @ts-ignore
        onChange={changeColor}/>
      <p
        // @ts-ignore
        style={{
          backgroundColor: color
        }}>{color}</p>
    </div>
  )
}

export default Name
