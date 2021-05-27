import React, { useState } from "react"
import { Input, InputNumber } from "antd"

function Home() {
  const [count, setCount] = useState(0);

  return(
    <div className="home-container">
      <p>this is home page!</p>
      <h2>you has click {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Input size="small" addonBefore="https://" defaultValue="google.com" />
    </div>
  )
}

export default Home
