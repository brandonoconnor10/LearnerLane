import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import BeforeYourTest from './pages/BeforeYourTest';

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gray-900 text-white'>
        {/* Nvigation Bar */}

        <nav className='bg-gray-800 p-4'>
          <ul className='flex space-x-4 justify-center'>
            <li>
              <Link to="/" className="text-cyan-400 hover:text-cyan-300">K53 Explained</Link>
            </li>
            <li>
              <Link to="/getting-started" className='text-cyan-400 hover:text-cyan-300'>Getting Started</Link>
            </li>
            <li>
              <Link to="/before-your-test" className='text-cyan-400 hover:text-cyan-300'>Before Your Test</Link>
            </li>
          </ul>
        </nav>


        {/* Main Content */}
        <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/getting-started" element={<GettingStarted/>}/>
          <Route path="/before-your-test" element={<BeforeYourTest/>}/>
        </Routes>
        </div>
      
      </div>
    </Router>
    
  );
}

export default App;