import React, { useState } from "react"

function Home() {
  const [count, setCount] = useState(0);

  return(
    <div className="home-container">
      <p>this is home page!</p>
      <h2>you has click {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default Home
