import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Quiz Pages
import AbandonedVehiclesQuizPage from './pages/AbandonedVehiclesQuizPage';
import ActionsGroupedQuizPage from './pages/ActionsGroupedQuizPage';
import AlcoholAndNarcoticDrugsQuizPage from './pages/AlcoholAndNarcoticDrugsQuizPage';
import AnimalsOnPublicRoadsQuizPage from './pages/AnimalsOnPublicRoadsQuizPage';
import BeforeYourTestQuizPage from './pages/BeforeYourTestQuizPage';
import BeingOvertakenQuizPage from './pages/BeingOvertakenQuizPage';
import CarryingALoadQuizPage from './pages/CarryingALoadQuizPage';
import CarryingPassengersQuizPage from './pages/CarryingPassengersQuizPage';
import CommandSignQuizPage from './pages/CommandSignsQuizPage';
import ComprehensionSignsQuizPage from './pages/ComprehensionSignsQuizPage';
import CompulsoryStopsQuizPage from './pages/CompulsoryStopsQuizPage';
import ControlSignsQuizPage from './pages/ControlSignsQuizPage';
import CrossingPublicRoadQuizPage from './pages/CrossingPublicRoadQuizPage';
import DamageToPublicRoadsQuizPage from './pages/DamageToPublicRoadsQuizPage';
import DefensiveDrivingQuizPage from './pages/DefensiveDrivingQuizPage';
import DerestrictionSignsQuizPage from './pages/DerestrictionSignsQuizPage';
import DiagrammaticSignSymbolsQuizPage from './pages/DiagrammaticSignSymbolsQuizPage';
import DirectionOfMovementSignsQuizPage from './pages/DirectionOfMovementSignsQuizPage';
import DirectionSignSymbolsQuizPage from './pages/DirectionSignSymbolsQuizPage';
import DirectionSignsQuizPage from './pages/DirectionSignsQuizPage';
import DrivingOnADividedRoadQuizPage from './pages/DrivingOnADividedRoadQuizPage';
import DrivingOnTheShoulderOfTheRoadQuizPage from './pages/DrivingOnTheShoulderOfTheRoadQuizPage';
import DutiesOfMotorcyclesQuizPage from './pages/DutiesOfMotorcyclesQuizPage';
import ExclusiveSecondaryQuizPage from './pages/ExclusiveSecondarySignsQuizPage';
import FreewayAllowedStopsQuizPage from './pages/FreewayAllowedStopsQuizPage';
import FreewayDirectionSignsQuizPage from './pages/FreewayDirectionSignsQuizPage';
import FreewaysQuizPage from './pages/FreewaysQuizPage';
import GeneralDutiesOfDriversQuizPage from './pages/GeneralDutiesOfDriversQuizPage';
import GeneralRulesQuizPage from './pages/GeneralRulesQuizPage';
import GettingStartedQuizPage from './pages/GettingStartedQuizPage';
import HazardMarkerSignsQuizPage from './pages/HazardMarkerSignsQuizPage';
import HinderingTrafficQuizPage from './pages/HinderingTrafficQuizPage';
import ImportantRulesQuizPage from './pages/ImportantRulesQuizPage';
import IndicatingQuizPage from './pages/IndicatingQuizPage';
import InformationSignsQuizPage from './pages/InformationSignsQuizPage';
import K53ExplainedQuizPage from './pages/K53ExplainedQuizPage';
import LearnersLicenceDisqualificationsQuizPage from './pages/LearnersLicenceDisqualificationsQuizPage';
import LearnersTestDetailsQuizPage from './pages/LearnersTestDetailsQuizPage';
import LightsQuizPage from './pages/LightsQuizPage';
import LocationSignQuizPage from './pages/LocationSignQuizPage';
import LocationSignSymbolQuizPage from './pages/LocationSignSymbolQuizPage';
import NotAllowedOnFreewaysQuizPage from './pages/NotAllowedOnFreewaysQuizPage';
import OvertakingQuizPage from './pages/OvertakingQuizPage';
import ParkingQuizPage from './pages/ParkingQuizPage';
import PedestrianCrossingQuizPage from './pages/PedestrianCrossingQuizPage';
import ProcessOfDefensiveDrivingQuizPage from './pages/ProcessOfDefensiveDrivingQuizPage';
import ProhibitionSignsQuizPage from './pages/ProhibitionSignsQuizPage';
import RacingOnPublicRoadsQuizPage from './pages/RacingOnPublicRoadsQuizPage';
import ReservationSignsQuizPage from './pages/ReservationSignsQuizPage';
import ReversingQuizPage from './pages/ReversingQuizPage';
import RoadLayoutSignsQuizPage from './pages/RoadLayoutSignsQuizPage';
import RoadMarkersQuizPage from './pages/RoadMarkersQuizPage';
import RoundaboutsQuizPage from './pages/RoundaboutsQuizPage';
import RouteMarkerSignsQuizPage from './pages/RouteMarkerSignsQuizPage';
import SafetyMarkingsQuizPage from './pages/SafetyMarkingsQuizPage';
import SeatLimitsQuizPage from './pages/SeatLimitsQuizPage';
import SelectiveRestrictionSignsQuizPage from './pages/SelectiveRestrictionSignsQuizPage';
import SpeedLimitsQuizPage from './pages/SpeedLimitsQuizPage';
import StepsOfDefensiveDrivingQuizPage from './pages/StepsOfDefensiveDrivingQuizPage';
import StoppingYourVehiclesQuizPage from './pages/StoppingYourVehiclesQuizPage';
import SymbolicSignsQuizPage from './pages/SymbolicSignsQuizPage';
import TemporaryCommandSignsQuizPage from './pages/TemporaryCommandSignsQuizPage';
import TemporaryControlSignsQuizPage from './pages/TemporaryControlSignsQuizPage';
import TemporaryDirectionOfMovementSignsQuizPage from './pages/TemporaryDirectionOfMovementSignsQuizPage';
import TemporaryGuidanceSignsQuizPage from './pages/TemporaryGuidanceSignsQuizPage';
import TemporaryHazardMarkerSignsQuizPage from './pages/TemporaryHazardMarkerSignsQuizPage';
import TemporaryInformationSignsQuizPage from './pages/TemporaryInformationSignsQuizPage';
import TemporaryProhibitionSignsQuizPage from './pages/TemporaryProhibitionSignsQuizPage';
import TemporaryReservationSignsQuizPage from './pages/TemporaryReservationSignsQuizPage';
import TemporaryRoadLayoutSignsQuizPage from './pages/TemporaryRoadLayoutSignsQuizPage';
import TemporarySignCombinationsQuizPage from './pages/TemporarySignCombinationsQuizPage';
import TemporarySymbolicSignsQuizPage from './pages/TemporarySymbolicSignsQuizPage';
import TourismSignSymbolsQuizPage from './pages/TourismSignSymbolsQuizPage';
import TowingQuizPage from './pages/TowingQuizPage';
import TrianglesQuizPage from './pages/TrianglesQuizPage';
import TurningLeftQuizPage from './pages/TurningLeftQuizPage';
import TurningRightQuizPage from './pages/TurningRightQuizPage';
import TyresQuizPage from './pages/TyresQuizPage';
import VariationsQuizPage from './pages/VariationsQuizPage';
import VehicleAccidentsQuizPage from './pages/VehicleAccidentsQuizPage';
import VehiclesCausingExcessiveNoiseQuizPage from './pages/VehiclesCausingExcessiveNoiseQuizPage';
import WarningSignCombinationsSignsQuizPage from './pages/WarningSignCombinationsSignsQuizPage';

// Rules
import AbandonedVehiclesPage from './pages/AbandonedVehiclesPage';
import ActionsGroupedPage from './pages/ActionsGroupedPage';
import AlcoholAndNarcoticDrugsPage from './pages/AlcoholAndNarcoticDrugsPage';
import AnimalsOnPublicRoadsPage from './pages/AnimalsOnPublicRoadsPage';
import BeingOvertakenPage from './pages/BeingOvertakenPage';
import CarryingALoadPage from './pages/CarryingALoadPage';
import CarryingPassengersPage from './pages/CarryingPassengersPage';
import CompulsoryStopsPage from './pages/CompulsoryStopsPage';
import CrossingPublicRoadPage from './pages/CrossingPublicRoadPage';
import DamageToPublicRoadsPage from './pages/DamageToPublicRoadsPage';
import DefensiveDrivingPage from './pages/DefensiveDrivingPage';
import DrivingOnADividedRoadPage from './pages/DrivingOnADividedRoadPage';
import DrivingOnTheShoulderOfTheRoadPage from './pages/DrivingOnTheShoulderOfTheRoadPage';
import DutiesOfMotorcyclesPage from './pages/DutiesOfMotorcyclesPage';
import FreewayAllowedStopsPage from './pages/FreewayAllowedStopsPage';
import FreewaysPage from './pages/FreewaysPage';
import GeneralDutiesOfDriversPage from './pages/GeneralDutiesOfDriversPage';
import GeneralRulesPage from './pages/GeneralRulesPage';
import HinderingTrafficPage from './pages/HinderingTrafficPage';
import ImportantRulesPage from './pages/ImportantRulesPage';
import IndicatingPage from './pages/IndicatingPage';
import NotAllowedOnFreewaysPage from './pages/NotAllowedOnFreewaysPage';
import OvertakingPage from './pages/OvertakingPage';
import ParkingPage from './pages/ParkingPage';
import PedestrianCrossingPage from './pages/PedestrianCrossingPage';
import ProcessOfDefensiveDrivingPage from './pages/ProcessOfDefensiveDrivingPage';
import RacingOnPublicRoadsPage from './pages/RacingOnPublicRoadsPage';
import ReversingPage from './pages/ReversingPage';
import RoundaboutsPage from './pages/RoundaboutsPage';
import SeatLimitsPage from './pages/SeatLimitsPage';
import SpeedLimitsPage from './pages/SpeedLimitsPage';
import StepsOfDefensiveDrivingPage from './pages/StepsOfDefensiveDrivingPage';
import StoppingYourVehiclesPage from './pages/StoppingYourVehiclesPage';
import TowingPage from './pages/TowingPage';
import TurningLeftPage from './pages/TurningLeftPage';
import TurningRightPage from './pages/TurningRightPage';
import TyresPage from './pages/TyresPage';
import VehicleAccidentsPage from './pages/VehicleAccidentsPage';
import VehiclesCausingExcessiveNoisePage from './pages/VehiclesCausingExcessiveNoisePage';

// Signs
import CommandSignPage from './pages/CommandSignsPage';
import ComprehensionSignsPage from './pages/ComprehensionSignsPage';
import ControlSignsPage from './pages/ControlSignsPage';
import DerestrictionSignsPage from './pages/DerestrictionSignsPage';
import DiagrammaticSignSymbolsPage from './pages/DiagrammaticSignSymbolsPage';
import DirectionOfMovementSignsPage from './pages/DirectionOfMovementSignsPage';
import DirectionSignSymbolsPage from './pages/DirectionSignSymbolsPage';
import DirectionSignsPage from './pages/DirectionSignsPage';
import ExclusiveSecondarySignsPage from './pages/ExclusiveSecondarySignsPage';
import FlagSignalsPage from './pages/FlagSignalsPage';
import FreewayDirectionSignsPage from './pages/FreewayDirectionSignsPage';
import GuidanceAndInfoSignsPage from './pages/GuidanceAndInfoSignsPage';
import HandSignalsPage from './pages/HandSignalsPage';
import HazardMarkerSignsPage from './pages/HazardMarkerSignsPage';
import InformationSignsPage from './pages/InformationSignsPage';
import LocationSignSymbolsPage from './pages/LocationSignSymbolsPage';
import LocationSignsPage from './pages/LocationSignsPage';
import OverheadLaneDirectionControlArrowsPage from './pages/OverheadLaneDirectionControlArrowsPage';
import ProhibitionSignsPage from './pages/ProhibitionSignsPage';
import RegulatorySignsPage from './pages/RegulatorySignsPage';
import ReservationSignPage from './pages/ReservationSignsPage';
import RoadLayoutSignsPage from './pages/RoadLayoutSignsPage';
import RoadMarkersPage from './pages/RoadMarkersPage';
import RoadMarkersSignPage from './pages/RoadMarkersSignsPage';
import RoadSignsPage from './pages/RoadSignsPage';
import RouteMarkerSignsPage from './pages/RouteMarkerSignsPage';
import SafetyMarkingsPage from './pages/SafetyMarkingsPage';
import SelectiveRestrictionSignsPage from './pages/SelectiveRestrictionSignsPage';
import StandardTrafficSignalsPage from './pages/StandardTrafficSignalsPage';
import SymbolicSignsPage from './pages/SymbolicSignsPage';
import TemporaryCommandSignsPage from './pages/TemporayCommandSignsPage';
import TemporaryControlSignsPage from './pages/TemporaryControlSignsPage';
import TemporaryDirectionOfMovementSignsPage from './pages/TemporaryDirectionOfMovementSignsPage';
import TemporaryGuidanceSignsPage from './pages/TemporaryGuidanceSignsPage';
import TemporaryHazardMarkerSignsPage from './pages/TemporaryHazardMarkerSignsPage';
import TemporaryInformationSignsPage from './pages/TemporaryInformationSignsPage';
import TemporaryProhibitionSignsPage from './pages/TemporaryProhibitionSignsPage';
import TemporaryReservationSignsPage from './pages/TemporaryReservationSignsPage';
import TemporaryRoadLayoutSignsPage from './pages/TemporaryRoadLayoutSignsPage';
import TemporarySignCombinationsPage from './pages/TemporarySignCombinationsPage';
import TemporarySignsPage from './pages/TemporarySignsPage';
import TemporarySymbolicSignsPage from './pages/TemporarySymbolicSignsPage';
import TourismSignSymbolsPage from './pages/TourismSignSymbolsPage';
import TrafficSignalsPage from './pages/TrafficSignalsPage';
import TrianglesPage from './pages/TrianglesPage';
import WarningSignCombinationsPage from './pages/WarningSignCombinationsPage';
import WarningSignsPage from './pages/WarningSignsPage';

// Other
import BeforeYourTestPage from './pages/BeforeYourTestPage';
import GettingStartedPage from './pages/GettingStartedPage';
import HomePage from './pages/HomePage';
import IntroductionPage from './pages/IntroductionPage';
import K53ExplainedPage from './pages/K53ExplainedPage';
import LearnersLicenceDisqualificationsPage from './pages/LearnersLicenceDisqualificationsPage';
import LearnersTestDetailsPage from './pages/LearnersTestDetailsPage';
import LightsPage from './pages/LightsPage';
import RulesOfTheRoadMapPage from './pages/RulesOfTheRoadMapPage';
import VariationsPage from './pages/VariationsPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-navy-dark text-white">
        <Routes>
          {/* Home and Introduction Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/before-your-test" element={<BeforeYourTestPage />} />
          <Route path="/before-your-test/quiz" element={<BeforeYourTestQuizPage />} />
          <Route path="/getting-started" element={<GettingStartedPage />} />
          <Route path="/getting-started/quiz" element={<GettingStartedQuizPage />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/k53-explained" element={<K53ExplainedPage />} />
          <Route path="/k53-explained/quiz" element={<K53ExplainedQuizPage />} />
          <Route path="/learners-licence-disqualifications" element={<LearnersLicenceDisqualificationsPage />} />
          <Route path="/learners-licence-disqualifications/quiz" element={<LearnersLicenceDisqualificationsQuizPage />} />
          <Route path="/learners-test-details" element={<LearnersTestDetailsPage />} />
          <Route path="/learners-test-details/quiz" element={<LearnersTestDetailsQuizPage />} />

          {/* Sign Routes */}
          <Route path="/command-signs" element={<CommandSignPage />} />
          <Route path="/command-signs/quiz" element={<CommandSignQuizPage />} />
          <Route path="/comprehension-signs" element={<ComprehensionSignsPage />} />
          <Route path="/comprehension-signs/quiz" element={<ComprehensionSignsQuizPage />} />
          <Route path="/control-signs" element={<ControlSignsPage />} />
          <Route path="/control-signs/quiz" element={<ControlSignsQuizPage />} />
          <Route path="/de-restriction-signs" element={<DerestrictionSignsPage />} />
          <Route path="/de-restriction-signs/quiz" element={<DerestrictionSignsQuizPage />} />
          <Route path="/diagrammatic-sign-symbols" element={<DiagrammaticSignSymbolsPage />} />
          <Route path="/diagrammatic-sign-symbols/quiz" element={<DiagrammaticSignSymbolsQuizPage />} />
          <Route path="/direction-of-movement-signs" element={<DirectionOfMovementSignsPage />} />
          <Route path="/direction-of-movement-signs/quiz" element={<DirectionOfMovementSignsQuizPage />} />
          <Route path="/direction-sign-symbols" element={<DirectionSignSymbolsPage />} />
          <Route path="/direction-sign-symbols/quiz" element={<DirectionSignSymbolsQuizPage />} />
          <Route path="/direction-signs" element={<DirectionSignsPage />} />
          <Route path="/direction-signs/quiz" element={<DirectionSignsQuizPage />} />
          <Route path="/exclusive-secondary-signs" element={<ExclusiveSecondarySignsPage />} />
          <Route path="/exclusive-secondary-signs/quiz" element={<ExclusiveSecondaryQuizPage />} />
          <Route path="/flag-signals" element={<FlagSignalsPage />} />
          <Route path="/freeway-direction-signs" element={<FreewayDirectionSignsPage />} />
          <Route path="/freeway-direction-signs/quiz" element={<FreewayDirectionSignsQuizPage />} />
          <Route path="/guidance-and-information-signs" element={<GuidanceAndInfoSignsPage />} />
          <Route path="/hand-signals" element={<HandSignalsPage />} />
          <Route path="/hazard-marker-signs" element={<HazardMarkerSignsPage />} />
          <Route path="/hazard-marker-signs/quiz" element={<HazardMarkerSignsQuizPage />} />
          <Route path="/information-signs" element={<InformationSignsPage />} />
          <Route path="/information-signs/quiz" element={<InformationSignsQuizPage />} />
          <Route path="/location-sign-symbols" element={<LocationSignSymbolsPage />} />
          <Route path="/location-sign-symbols/quiz" element={<LocationSignSymbolQuizPage />} />
          <Route path="/location-signs" element={<LocationSignsPage />} />
          <Route path="/location-signs/quiz" element={<LocationSignQuizPage />} />
          <Route path="/overhead-lane-direction-control-arrows" element={<OverheadLaneDirectionControlArrowsPage />} />
          <Route path="/prohibition-signs" element={<ProhibitionSignsPage />} />
          <Route path="/prohibition-signs/quiz" element={<ProhibitionSignsQuizPage />} />
          <Route path="/regulatory-signs" element={<RegulatorySignsPage />} />
          <Route path="/reservation-signs" element={<ReservationSignPage />} />
          <Route path="/reservation-signs/quiz" element={<ReservationSignsQuizPage />} />
          <Route path="/road-layout-signs" element={<RoadLayoutSignsPage />} />
          <Route path="/road-layout-signs/quiz" element={<RoadLayoutSignsQuizPage />} />
          <Route path="/road-marker-signs" element={<RoadMarkersPage />} />
          <Route path="/road-markers" element={<RoadMarkersSignPage />} />
          <Route path="/road-markers/quiz" element={<RoadMarkersQuizPage />} />
          <Route path="/road-signs" element={<RoadSignsPage />} />
          <Route path="/route-marker-signs" element={<RouteMarkerSignsPage />} />
          <Route path="/route-marker-signs/quiz" element={<RouteMarkerSignsQuizPage />} />
          <Route path="/selective-restriction-signs" element={<SelectiveRestrictionSignsPage />} />
          <Route path="/selective-restriction-signs/quiz" element={<SelectiveRestrictionSignsQuizPage />} />
          <Route path="/standard-traffic-signals" element={<StandardTrafficSignalsPage />} />
          <Route path="/symbolic-signs" element={<SymbolicSignsPage />} />
          <Route path="/symbolic-signs/quiz" element={<SymbolicSignsQuizPage />} />
          <Route path="/temporary-command-signs" element={<TemporaryCommandSignsPage />} />
          <Route path="/temporary-command-signs/quiz" element={<TemporaryCommandSignsQuizPage />} />
          <Route path="/temporary-control-signs" element={<TemporaryControlSignsPage />} />
          <Route path="/temporary-control-signs/quiz" element={<TemporaryControlSignsQuizPage />} />
          <Route path="/temporary-direction-of-movement-signs" element={<TemporaryDirectionOfMovementSignsPage />} />
          <Route path="/temporary-direction-of-movement-signs/quiz" element={<TemporaryDirectionOfMovementSignsQuizPage />} />
          <Route path="/temporary-guidance-signs" element={<TemporaryGuidanceSignsPage />} />
          <Route path="/temporary-guidance-signs/quiz" element={<TemporaryGuidanceSignsQuizPage />} />
          <Route path="/temporary-hazard-marker-signs" element={<TemporaryHazardMarkerSignsPage />} />
          <Route path="/temporary-hazard-marker-signs/quiz" element={<TemporaryHazardMarkerSignsQuizPage />} />
          <Route path="/temporary-information-signs" element={<TemporaryInformationSignsPage />} />
          <Route path="/temporary-information-signs/quiz" element={<TemporaryInformationSignsQuizPage />} />
          <Route path="/temporary-prohibition-signs" element={<TemporaryProhibitionSignsPage />} />
          <Route path="/temporary-prohibition-signs/quiz" element={<TemporaryProhibitionSignsQuizPage />} />
          <Route path="/temporary-reservation-signs" element={<TemporaryReservationSignsPage />} />
          <Route path="/temporary-reservation-signs/quiz" element={<TemporaryReservationSignsQuizPage />} />
          <Route path="/temporary-road-layout-signs" element={<TemporaryRoadLayoutSignsPage />} />
          <Route path="/temporary-road-layout-signs/quiz" element={<TemporaryRoadLayoutSignsQuizPage />} />
          <Route path="/temporary-sign-combinations" element={<TemporarySignCombinationsPage />} />
          <Route path="/temporary-sign-combinations/quiz" element={<TemporarySignCombinationsQuizPage />} />
          <Route path="/temporary-signs" element={<TemporarySignsPage />} />
          <Route path="/temporary-symbolic-signs" element={<TemporarySymbolicSignsPage />} />
          <Route path="/temporary-symbolic-signs/quiz" element={<TemporarySymbolicSignsQuizPage />} />
          <Route path="/tourism-sign-symbols" element={<TourismSignSymbolsPage />} />
          <Route path="/tourism-sign-symbols/quiz" element={<TourismSignSymbolsQuizPage />} />
          <Route path="/traffic-signals" element={<TrafficSignalsPage />} />
          <Route path="/warning-sign-combinations-signs" element={<WarningSignCombinationsPage />} />
          <Route path="/warning-sign-combinations-signs/quiz" element={<WarningSignCombinationsSignsQuizPage />} />
          <Route path="/warning-signs" element={<WarningSignsPage />} />

          {/* Rules Routes */}
          <Route path="/4-steps-of-defensive-driving" element={<StepsOfDefensiveDrivingPage />} />
          <Route path="/abandoned-vehicles-on-public-roads" element={<AbandonedVehiclesPage />} />
          <Route path="/actions" element={<ActionsGroupedPage />} />
          <Route path="/alcohol-and-narcotic-drugs" element={<AlcoholAndNarcoticDrugsPage />} />
          <Route path="/animals-on-public-roads" element={<AnimalsOnPublicRoadsPage />} />
          <Route path="/being-overtaken" element={<BeingOvertakenPage />} />
          <Route path="/carrying-a-load" element={<CarryingALoadPage />} />
          <Route path="/carrying-passengers" element={<CarryingPassengersPage />} />
          <Route path="/compulsory-stops" element={<CompulsoryStopsPage />} />
          <Route path="/cross-or-entering-a-public-road-or-traffic-lane" element={<CrossingPublicRoadPage />} />
          <Route path="/damage-to-public-roads" element={<DamageToPublicRoadsPage />} />
          <Route path="/defensive-driving" element={<DefensiveDrivingPage />} />
          <Route path="/driving-on-a-divided-road" element={<DrivingOnADividedRoadPage />} />
          <Route path="/driving-on-the-shoulder-of-the-road" element={<DrivingOnTheShoulderOfTheRoadPage />} />
          <Route path="/duties-relating-to-motorcycles" element={<DutiesOfMotorcyclesPage />} />
          <Route path="/freeway-allowed-stops" element={<FreewayAllowedStopsPage />} />
          <Route path="/freeways" element={<FreewaysPage />} />
          <Route path="/general-duties-of-drivers-and-passengers" element={<GeneralDutiesOfDriversPage />} />
          <Route path="/general-rules" element={<GeneralRulesPage />} />
          <Route path="/hindering-or-obstructing-traffic-on-a-public-road" element={<HinderingTrafficPage />} />
          <Route path="/important-rules" element={<ImportantRulesPage />} />
          <Route path="/indicating" element={<IndicatingPage />} />
          <Route path="/lights" element={<LightsPage />} />
          <Route path="/minitraffic-circles-and-roundabouts" element={<RoundaboutsPage />} />
          <Route path="/not-allowed-on-freeways" element={<NotAllowedOnFreewaysPage />} />
          <Route path="/Overtaking-or-passing-another-vehicle" element={<OvertakingPage />} />
          <Route path="/parking" element={<ParkingPage />} />
          <Route path="/pedestrian-crossing" element={<PedestrianCrossingPage />} />
          <Route path="/racing-and-sport-on-public-roads" element={<RacingOnPublicRoadsPage />} />
          <Route path="/reversing" element={<ReversingPage />} />
          <Route path="/rules-of-the-road" element={<RulesOfTheRoadMapPage />} />
          <Route path="/safety-markings" element={<SafetyMarkingsPage />} />
          <Route path="/seat-limits" element={<SeatLimitsPage />} />
          <Route path="/speed-limits" element={<SpeedLimitsPage />} />
          <Route path="/stopping-your-vehicle" element={<StoppingYourVehiclesPage />} />
          <Route path="/the-process-of-defensive-driving" element={<ProcessOfDefensiveDrivingPage />} />
          <Route path="/towing" element={<TowingPage />} />
          <Route path="/triangles" element={<TrianglesPage />} />
          <Route path="/turning-left" element={<TurningLeftPage />} />
          <Route path="/turning-right" element={<TurningRightPage />} />
          <Route path="/tyres" element={<TyresPage />} />
          <Route path="/variations" element={<VariationsPage />} />
          <Route path="/vehicle-accidents" element={<VehicleAccidentsPage />} />
          <Route path="/vehicles-causing-excessive-noise" element={<VehiclesCausingExcessiveNoisePage />} />

          {/* Quiz Routes */}
          <Route path="/4-steps-of-defensive-driving/quiz" element={<StepsOfDefensiveDrivingQuizPage />} />
          <Route path="/abandoned-vehicles-on-public-roads/quiz" element={<AbandonedVehiclesQuizPage />} />
          <Route path="/actions/quiz" element={<ActionsGroupedQuizPage />} />
          <Route path="/alcohol-and-narcotic-drugs/quiz" element={<AlcoholAndNarcoticDrugsQuizPage />} />
          <Route path="/animals-on-public-roads/quiz" element={<AnimalsOnPublicRoadsQuizPage />} />
          <Route path="/being-overtaken/quiz" element={<BeingOvertakenQuizPage />} />
          <Route path="/carrying-a-load/quiz" element={<CarryingALoadQuizPage />} />
          <Route path="/carrying-passengers/quiz" element={<CarryingPassengersQuizPage />} />
          <Route path="/compulsory-stops/quiz" element={<CompulsoryStopsQuizPage />} />
          <Route path="/cross-or-entering-a-public-road-or-traffic-lane/quiz" element={<CrossingPublicRoadQuizPage />} />
          <Route path="/damage-to-public-roads/quiz" element={<DamageToPublicRoadsQuizPage />} />
          <Route path="/defensive-driving/quiz" element={<DefensiveDrivingQuizPage />} />
          <Route path="/driving-on-a-divided-road/quiz" element={<DrivingOnADividedRoadQuizPage />} />
          <Route path="/driving-on-the-shoulder-of-the-road/quiz" element={<DrivingOnTheShoulderOfTheRoadQuizPage />} />
          <Route path="/duties-relating-to-motorcycles/quiz" element={<DutiesOfMotorcyclesQuizPage />} />
          <Route path="/freeway-allowed-stops/quiz" element={<FreewayAllowedStopsQuizPage />} />
          <Route path="/freeways/quiz" element={<FreewaysQuizPage />} />
          <Route path="/general-duties-of-drivers-and-passengers/quiz" element={<GeneralDutiesOfDriversQuizPage />} />
          <Route path="/general-rules/quiz" element={<GeneralRulesQuizPage />} />
          <Route path="/hindering-or-obstructing-traffic-on-a-public-road/quiz" element={<HinderingTrafficQuizPage />} />
          <Route path="/important-rules/quiz" element={<ImportantRulesQuizPage />} />
          <Route path="/indicating/quiz" element={<IndicatingQuizPage />} />
          <Route path="/lights/quiz" element={<LightsQuizPage />} />
          <Route path="/minitraffic-circles-and-roundabouts/quiz" element={<RoundaboutsQuizPage />} />
          <Route path="/not-allowed-on-freeways/quiz" element={<NotAllowedOnFreewaysQuizPage />} />
          <Route path="/overtaking-or-passing-another-vehicle/quiz" element={<OvertakingQuizPage />} />
          <Route path="/parking/quiz" element={<ParkingQuizPage />} />
          <Route path="/pedestrian-crossing/quiz" element={<PedestrianCrossingQuizPage />} />
          <Route path="/racing-and-sport-on-public-roads/quiz" element={<RacingOnPublicRoadsQuizPage />} />
          <Route path="/reversing/quiz" element={<ReversingQuizPage />} />
          <Route path="/safety-markings/quiz" element={<SafetyMarkingsQuizPage />} />
          <Route path="/seat-limits/quiz" element={<SeatLimitsQuizPage />} />
          <Route path="/speed-limits/quiz" element={<SpeedLimitsQuizPage />} />
          <Route path="/stopping-your-vehicle/quiz" element={<StoppingYourVehiclesQuizPage />} />
          <Route path="/the-process-of-defensive-driving/quiz" element={<ProcessOfDefensiveDrivingQuizPage />} />
          <Route path="/towing/quiz" element={<TowingQuizPage />} />
          <Route path="/triangles/quiz" element={<TrianglesQuizPage />} />
          <Route path="/turning-left/quiz" element={<TurningLeftQuizPage />} />
          <Route path="/turning-right/quiz" element={<TurningRightQuizPage />} />
          <Route path="/tyres/quiz" element={<TyresQuizPage />} />
          <Route path="/variations/quiz" element={<VariationsQuizPage />} />
          <Route path="/vehicle-accidents/quiz" element={<VehicleAccidentsQuizPage />} />
          <Route path="/vehicles-causing-excessive-noise/quiz" element={<VehiclesCausingExcessiveNoiseQuizPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;