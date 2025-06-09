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
import BeforeYourTestPage from './pages/BeforeYourTestPage';
import BeforeYourTestQuizPage from './pages/BeforeYourTestQuizPage';
import RoadSignsPage from './pages/RoadSignsPage';
import RegulatorySignsPage from './pages/RegulatorySignsPage';
import WarningSignsPage from './pages/WarningSignsPage';
import GuidanceAndInfoSignsPage from './pages/GuidanceAndInfoSignsPage';
import TrafficSignalsPage from './pages/TrafficSignalsPage';
import TemporarySignsPage from './pages/TemporarySignsPage';
import RoadMarkersPage from './pages/RoadMarkersPage';
import ControlSignsPage from './pages/ControlSignsPage';
import CommandSignPage from './pages/CommandSignsPage';
import ProhibitionSignsPage from './pages/ProhibitionSignsPage';
import ReservationSignPage from './pages/ReservationSignsPage';
import ComprehensionSignsPage from './pages/ComprehensionSignsPage';
import DerestrictionSignsPage from './pages/DerestrictionSignsPage';
import ExclusiveSecondarySignsPage from './pages/ExclusiveSecondarySignsPage';
import SelectiveRestrictionSignsPage from './pages/SelectiveRestrictionSignsPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-navy-dark text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path='/road-signs' element={<RoadSignsPage />} />
          <Route path='/regulatory-signs' element={<RegulatorySignsPage />}/>
          <Route path='/warning-signs' element={<WarningSignsPage />}/>
          <Route path='/guidance-and-information-signs' element={<GuidanceAndInfoSignsPage />}/>
          <Route path='/traffic-signals' element={<TrafficSignalsPage />}/>
          <Route path='/temporary-signs' element={<TemporarySignsPage />}/>
          <Route path='/control-signs' element={<ControlSignsPage />}/>
          <Route path='/road-markers' element={<RoadMarkersPage />}/>
          <Route path="/k53-explained" element={<K53ExplainedPage />} />
          <Route path="/k53-explained/quiz" element={<K53ExplainedQuizPage />} />
          <Route path='/getting-started' element={ <GettingStartedPage />} />
          <Route path="/getting-started/quiz" element={<GettingStartedQuizPage />} />
          <Route path="/learners-test-details" element={<LearnersTestDetailsPage />} />
          <Route path='/learners-test-details/quiz' element={<LearnersTestDetailsQuizPage />} />
          <Route path='/learners-licence-disqualifications' element={ <LearnersLicenceDisqualificationsPage />}/>
          <Route path='/learners-licence-disqualifications/quiz' element={<LearnersLicenceDisqualificationsQuizPage />}/>
          <Route path='/before-your-test' element={ <BeforeYourTestPage />}/>
          <Route path='/before-your-test/quiz' element={<BeforeYourTestQuizPage />}/>
          <Route path='/command-signs' element={<CommandSignPage />}/>
          <Route path='/reservation-signs' element={<ReservationSignPage />}/>
          <Route path='/prohibition-signs' element={<ProhibitionSignsPage />}/>
          <Route path='/comprehension-signs' element={<ComprehensionSignsPage />}/>
          <Route path='/de-restriction-signs' element={<DerestrictionSignsPage />}/>
          <Route path='/exclusive-secondary-signs' element={<ExclusiveSecondarySignsPage />}/>
          <Route path='/selective-restriction-signs' element={<SelectiveRestrictionSignsPage />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;