import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IntroductionPage from './pages/IntroductionPage';
import K53ExplainedPage from './pages/K53ExplainedPage';
import K53ExplainedQuizPage from './pages/K53ExplainedQuizPage';
import GettingStartedPage from './pages/GettingStartedPage';
import GettingStartedQuizPage from './pages/GettingStartedQuizPage';
import LearnersTestDetailsPage from './pages/LearnersTestDetailsPage';
import LearnersTestDetailsQuizPage from './pages/LearnersTestDetailsQuizPage';
import LearnersLicenceDisqualificationsPage from './pages/LearnersLicenceDisqualificationsPage';
import LearnersLicenceDisqualificationsQuizPage from './pages/LearnersLicenceDisqualifcationsQuizPage';


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
          <Route path="/getting-started/quiz" element={<GettingStartedQuizPage />} />
          <Route path="/learners-test-details" element={<LearnersTestDetailsPage />} />
          <Route path='/learners-test-details/quiz' element={<LearnersTestDetailsQuizPage />} />
          <Route path='/learners-licence-disqualifications' element={ <LearnersLicenceDisqualificationsPage />}/>
          <Route path='/learners-licence-disqualifications/quiz' element={<LearnersLicenceDisqualificationsQuizPage />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;