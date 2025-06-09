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
import RoadLayoutSignsPage from './pages/RoadLayoutSignsPage';
import DirectionOfMovementSignsPage from './pages/DirectionOfMovementSignsPage';
import SymbolicSignsPage from './pages/SymbolicSignsPage';
import HazardMarkerSignsPage from './pages/HazardMarkerSignsPage';
import WarningSignCombinationsPage from './pages/WarningSignCombinationsPage';
import LocationSignSymbolsPage from './pages/LocationSignSymbolsPage';
import DirectionSignSymbolsPage from './pages/DirectionSignSymbolsPage';
import DiagrammaticSignSymbolsPage from './pages/DiagrammaticSignSymbolsPage';
import LocationSignsPage from './pages/LocationSignsPage';
import RouteMarkerSignsPage from './pages/RouteMarkerSignsPage';
import DirectionSignsPage from './pages/DirectionSignsPage';
import FreewayDirectionSignsPage from './pages/FreewayDirectionSignsPage';
import TourismSignSymbolsPage from './pages/TourismSignSymbolsPage';
import InformationSignsPage from './pages/InformationSignsPage';

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
          <Route path='/road-layout-signs' element={<RoadLayoutSignsPage />}/>
          <Route path='/direction-of-movement-signs' element={<DirectionOfMovementSignsPage />}/>
          <Route path='/symbolic-signs'  element={<SymbolicSignsPage />}/>
          <Route path='/hazard-marker-signs' element={<HazardMarkerSignsPage />}/>
          <Route path='/warning-sign-combinations-signs' element={<WarningSignCombinationsPage />}/>

          <Route path='/location-sign-symbols' element={<LocationSignSymbolsPage /> } />
          <Route path='/direction-sign-symbols' element={<DirectionSignSymbolsPage /> }/>
          <Route path='/diagrammatic-sign-symbols' element={<DiagrammaticSignSymbolsPage /> }/>
          <Route path='/location-signs' element={<LocationSignsPage /> }/>
          <Route path='/route-marker-signs' element={<RouteMarkerSignsPage /> }/>
          <Route path='/direction-signs' element={<DirectionSignsPage /> }/>
          <Route path='/freeway-direction-signs' element={<FreewayDirectionSignsPage /> }/>
          <Route path='/tourism-sign-symbols' element={<TourismSignSymbolsPage /> }/>
          <Route path='/information-signs' element={<InformationSignsPage /> }/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;