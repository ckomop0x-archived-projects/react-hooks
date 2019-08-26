import React, { useState, useEffect }  from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setCount(c => c + 1)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      {
        posts &&
        posts.map(post => {
          // @ts-ignore
          return <p key={post.id}>{post.title}</p>
        })
      }
    </div>
  )
}

export default Counter
