import { useEffect } from "react"
import { fetchData } from "./data/fetchData"
import Home from './pages/Home'


const App = () => {

  useEffect(() => {fetchData().then(data => console.log('App received: ',data))}, [])  
  return (
    <div>
      <Home />
    </div>
  )
}

export default App