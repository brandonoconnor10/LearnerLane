import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-navy-dark text-white'>
        <HomePage/>
      </div>
    </Router>
      
  
  )
}

export default App