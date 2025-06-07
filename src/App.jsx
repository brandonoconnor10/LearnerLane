import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IntroductionPage from './pages/IntroductionPage';
import K53ExplainedPage from './pages/K53ExplainedPage';
import K53ExplainedQuizPage from './pages/K53ExplainedQuizPage';
import GettingStartedPage from './pages/GettingStartedPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-navy-dark text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/k53-explained" element={<K53ExplainedPage />} />
          <Route path="/k53-explained/quiz" element={<K53ExplainedQuizPage />} />
          <Route path='/getting-started' element={ <GettingStartedPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;