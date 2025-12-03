import { useState } from 'react'
import ChatList from './index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatList/>
    </>
  )
}

export default App
