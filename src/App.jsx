import { useEffect } from "react"
import { fetchData } from "./data/fetchData"


const App = () => {

  useEffect(() => {fetchData('section', 'Introduction').then(data => console.log(data))}, [])  
  return (
    <div>
      
    </div>
  )
}

export default App