import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignRoutes from './components/SignRoutes';
import RulesRoutes from './components/RulesRoutes';
import QuizRoutes from './components/QuizRoutes';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-navy-dark text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {SignRoutes()}
          {RulesRoutes()}
          {QuizRoutes()}
        </Routes>
      </div>
    </Router>
  );
};

export default App;