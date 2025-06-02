import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import BeforeYourTest from './pages/BeforeYourTest';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/getting-started" element={<GettingStarted/>}/>
          <Route path="/before-your-test" element={<BeforeYourTest/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;