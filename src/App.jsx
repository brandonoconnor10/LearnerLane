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
import TemporaryControlSignsPage from './pages/TemporaryControlSignsPage';
import TemporaryCommandSignsPage from './pages/TemporayCommandSignsPage';
import TemporaryProhibitionSignsPage from './pages/TemporaryProhibitionSignsPage';
import TemporaryReservationSignsPage from './pages/TemporaryReservationSignsPage';
import TemporaryRoadLayoutSignsPage from './pages/TemporaryRoadLayoutSignsPage';
import TemporaryDirectionOfMovementSignsPage from './pages/TemporaryDirectionOfMovementSignsPage';
import TemporarySymbolicSignsPage from './pages/TemporarySymbolicSignsPage';
import TemporaryHazardMarkerSignsPage from './pages/TemporaryHazardMarkerSignsPage';
import TemporaryGuidanceSignsPage from './pages/TemporaryGuidanceSignsPage';
import TemporaryInformationSignsPage from './pages/TemporaryInformationSignsPage';
import TemporarySignCombinationsPage from './pages/TemporarySignCombinationsPage';
import RoadMarkersSignPage from './pages/RoadMarkersSignsPage';
import StandardTrafficSignalsPage from './pages/StandardTrafficSignalsPage';
import OverheadLaneDirectionControlArrowsPage from './pages/OverheadLaneDirectionControlArrowsPage';
import HandSignalsPage from './pages/HandSignalsPage';
import FlagSignalsPage from './pages/FlagSignalsPage';
import RulesOfTheRoadMapPage from './pages/RulesOfTheRoadMapPage';
import GeneralRulesPage from './pages/GeneralRulesPage';
import DrivingOnADividedRoadPage from './pages/DrivingOnADividedRoadPage';
import DrivingOnTheShoulderOfTheRoadPage from './pages/DrivingOnTheShoulderOfTheRoadPage';
import ParkingPage from './pages/ParkingPage';
import OvertakingPage from './pages/OvertakingPage';
import BeingOvertakenPage from './pages/BeingOvertakenPage';
import CrossingPublicRoadPage from './pages/CrossingPublicRoadPage';
import IndicatingPage from './pages/IndicatingPage';
import TurningLeftPage from './pages/TurningLeftPage';
import TurningRightPage from './pages/TurningRightPage';
import RoundaboutsPage from './pages/RoundaboutsPage';
import StoppingYourVehiclesPage from './pages/StoppingYourVehiclesPage';
import CompulsoryStopsPage from './pages/CompulsoryStopsPage';
import GeneralDutiesOfDriversPage from './pages/GeneralDutiesOfDriversPage';
import DutiesOfMotorcyclesPage from './pages/DutiesOfMotorcyclesPage';
import VehiclesCausingExcessiveNoisePage from './pages/VehiclesCausingExcessiveNoisePage';
import PedestrianCrossingPage from './pages/PedestrianCrossingPage';
import RacingOnPublicRoadsPage from './pages/RacingOnPublicRoadsPage';
import HinderingTrafficPage from './pages/HinderingTrafficPage';
import AbandonedVehiclesPage from './pages/AbandonedVehiclesPage';
import DamageToPublicRoadsPage from './pages/DamageToPublicRoadsPage';
import FreewaysPage from './pages/FreewaysPage';
import NotAllowedOnFreewaysPage from './pages/NotAllowedOnFreewaysPage';
import FreewayAllowedStopsPage from './pages/FreewayAllowedStopsPage';
import TowingPage from './pages/TowingPage';
import SpeedLimitsPage from './pages/SpeedLimitsPage';
import SeatLimitsPage from './pages/SeatLimitsPage';
import TyresPage from './pages/TyresPage';
import LightsPage from './pages/LightsPage';
import VehicleAccidentsPage from './pages/VehicleAccidentsPage';
import ImportantRulesPage from './pages/ImportantRulesPage';
import AlcoholAndNarcoticDrugsPage from './pages/AlcoholAndNarcoticDrugsPage';
import TrianglesPage from './pages/TrianglesPage';
import CarryingPassengersPage from './pages/CarryingPassengersPage';
import AnimalsOnPublicRoadsPage from './pages/AnimalsOnPublicRoadsPage';
import CarryingALoadPage from './pages/CarryingALoadPage';
import SafetyMarkingsPage from './pages/SafetyMarkingsPage';
import ReversingPage from './pages/ReversingPage';
import DefensiveDrivingPage from './pages/DefensiveDrivingPage';
import StepsOfDefensiveDrivingPage from './pages/StepsOfDefensiveDrivingPage';
import ProcessOfDefensiveDrivingPage from './pages/ProcessOfDefensiveDrivingPage';
import ActionsGroupedPage from './pages/ActionsGroupedPage';
import VariationsPage from './pages/VariationsPage';
import ControlSignsQuizPage from './pages/ControlSignsQuizPage';
import CommandSignQuizPage from './pages/CommandSignsQuizPage';
import ProhibitionSignsQuizPage from './pages/ProhibitionSignsQuizPage';
import ReservationSignsQuizPage from './pages/ReservationSignsQuizPage';

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
          <Route path='/road-marker-signs' element={<RoadMarkersPage />}/>
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
          <Route path='/reservation-signs/quiz' element={<ReservationSignsQuizPage />}/>
          <Route path='/control-signs/quiz' element={<ControlSignsQuizPage />}/>
          <Route path='/command-signs/quiz' element={<CommandSignQuizPage />}/>
          <Route path='/prohibition-signs/quiz' element={<ProhibitionSignsQuizPage />}/>
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
          <Route path='/temporary-control-signs' element={<TemporaryControlSignsPage /> }/>
          <Route path='/temporary-command-signs' element={<TemporaryCommandSignsPage /> }/>
          <Route path='/temporary-prohibition-signs' element={<TemporaryProhibitionSignsPage /> }/>
          <Route path='/temporary-reservation-signs' element={<TemporaryReservationSignsPage /> }/>
          <Route path='/temporary-road-layout-signs' element={<TemporaryRoadLayoutSignsPage /> }/>
          <Route path='/temporary-direction-of-movement-signs' element={<TemporaryDirectionOfMovementSignsPage /> }/>
          <Route path='/temporary-symbolic-signs' element={<TemporarySymbolicSignsPage /> }/>
          <Route path='/temporary-hazard-marker-signs' element={<TemporaryHazardMarkerSignsPage /> }/>
          <Route path='/temporary-guidance-signs' element={<TemporaryGuidanceSignsPage /> } />
          <Route path='/temporary-information-signs' element={<TemporaryInformationSignsPage /> }/>
          <Route path='/temporary-sign-combinations' element={<TemporarySignCombinationsPage /> }/>
          <Route path='/road-markers' element={<RoadMarkersSignPage /> }/>
          <Route path='/standard-traffic-signals' element={<StandardTrafficSignalsPage /> }/>
          <Route path='/overhead-lane-direction-control-arrows' element={<OverheadLaneDirectionControlArrowsPage /> }/>
          <Route path='/hand-signals' element={<HandSignalsPage /> }/>
          <Route path='/flag-signals' element={<FlagSignalsPage /> }/>
          <Route path='/rules-of-the-road' element={<RulesOfTheRoadMapPage /> }/>
          <Route path='/general-rules' element={<GeneralRulesPage /> }/>
          <Route path='/driving-on-a-divided-road' element={<DrivingOnADividedRoadPage /> }/>
          <Route path='/driving-on-the-shoulder-of-the-road' element={<DrivingOnTheShoulderOfTheRoadPage /> }/>
          <Route path='/parking' element={<ParkingPage /> }/>
          <Route path='/Overtaking-or-passing-another-vehicle' element={<OvertakingPage /> }/>
          <Route path='/being-overtaken' element={<BeingOvertakenPage /> }/>
          <Route path='/cross-or-entering-a-public-road-or-traffic-lane' element={<CrossingPublicRoadPage /> }/>
          <Route path='/indicating' element={<IndicatingPage /> }/>
          <Route path='/turning-left' element={<TurningLeftPage /> }/>
          <Route path='/turning-right' element={<TurningRightPage /> }/>
          <Route path='/minitraffic-circles-and-roundabouts' element={<RoundaboutsPage /> }/>
          <Route path='/stopping-your-vehicle' element={<StoppingYourVehiclesPage /> }/>
          <Route path='/compulsory-stops' element={<CompulsoryStopsPage /> }/>
          <Route path='/general-duties-of-drivers-and-passengers' element={<GeneralDutiesOfDriversPage /> }/>
          <Route path='/duties-relating-to-motorcycles' element={<DutiesOfMotorcyclesPage /> }/>
          <Route path='/vehicles-causing-excessive-noise' element={<VehiclesCausingExcessiveNoisePage /> }/>
          <Route path='/pedestrian-crossing' element={<PedestrianCrossingPage /> }/>
          <Route path='/racing-and-sport-on-public-roads' element={<RacingOnPublicRoadsPage /> }/>
          <Route path='/hindering-or-obstructing-traffic-on-a-public-road' element={<HinderingTrafficPage /> }/>
          <Route path='/abandoned-vehicles-on-public-roads' element={<AbandonedVehiclesPage /> }/>
          <Route path='/damage-to-public-roads' element={<DamageToPublicRoadsPage /> }/>
          <Route path='/freeways' element={<FreewaysPage /> }/>
          <Route path='/not-allowed-on-freeways' element={<NotAllowedOnFreewaysPage /> }/>
          <Route path='/freeway-allowed-stops' element={<FreewayAllowedStopsPage /> }/>
          <Route path='/towing' element={<TowingPage /> }/>
          <Route path='/speed-limits' element={<SpeedLimitsPage /> }/>
          <Route path='/seat-limits' element={<SeatLimitsPage /> }/>
          <Route path='/tyres' element={<TyresPage/> }/>
          <Route path='/lights' element={<LightsPage /> }/>
          <Route path='/vehicle-accidents' element={<VehicleAccidentsPage /> }/>
          <Route path='/important-rules' element={<ImportantRulesPage /> }/>
          <Route path='/alcohol-and-narcotic-drugs' element={<AlcoholAndNarcoticDrugsPage /> }/>
          <Route path='/triangles' element={<TrianglesPage/> }/>
          <Route path='/carrying-passengers' element={<CarryingPassengersPage /> }/>
          <Route path='/animals-on-public-roads' element={<AnimalsOnPublicRoadsPage /> }/>
          <Route path='carrying-a-load' element={<CarryingALoadPage /> }/>
          <Route path='/safety-markings' element={<SafetyMarkingsPage /> }/>
          <Route path='/reversing' element={<ReversingPage /> }/>
          <Route path='defensive-driving' element={<DefensiveDrivingPage /> }/>
          <Route path='/4-steps-of-defensive-driving' element={<StepsOfDefensiveDrivingPage /> }/>
          <Route path='the-process-of-defensive-driving' element={<ProcessOfDefensiveDrivingPage /> }/>
          <Route path='actions-grouped' element={<ActionsGroupedPage /> }/>
          <Route path='variations' element={<VariationsPage /> }/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;