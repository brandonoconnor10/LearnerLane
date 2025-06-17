import { Route } from 'react-router-dom';

import BeforeYourTestPage from '../pages/BeforeYourTestPage';
import GettingStartedPage from '../pages/GettingStartedPage';
import IntroductionPage from '../pages/IntroductionPage';
import K53ExplainedPage from '../pages/K53ExplainedPage';
import LearnersLicenceDisqualificationsPage from '../pages/LearnersLicenceDisqualificationsPage';
import LearnersTestDetailsPage from '../pages/LearnersTestDetailsPage';
import RulesOfTheRoadMapPage from '../pages/RulesOfTheRoadMapPage';
import LightsPage from '../pages/LightsPage';
import VariationsPage from '../pages/VariationsPage';
import AbandonedVehiclesPage from '../pages/AbandonedVehiclesPage';
import ActionsGroupedPage from '../pages/ActionsGroupedPage';
import AlcoholAndNarcoticDrugsPage from '../pages/AlcoholAndNarcoticDrugsPage';
import AnimalsOnPublicRoadsPage from '../pages/AnimalsOnPublicRoadsPage';
import BeingOvertakenPage from '../pages/BeingOvertakenPage';
import CarryingALoadPage from '../pages/CarryingALoadPage';
import CarryingPassengersPage from '../pages/CarryingPassengersPage';
import CompulsoryStopsPage from '../pages/CompulsoryStopsPage';
import CrossingPublicRoadPage from '../pages/CrossingPublicRoadPage';
import DamageToPublicRoadsPage from '../pages/DamageToPublicRoadsPage';
import DefensiveDrivingPage from '../pages/DefensiveDrivingPage';
import DrivingOnADividedRoadPage from '../pages/DrivingOnADividedRoadPage';
import DrivingOnTheShoulderOfTheRoadPage from '../pages/DrivingOnTheShoulderOfTheRoadPage';
import DutiesOfMotorcyclesPage from '../pages/DutiesOfMotorcyclesPage';
import FreewayAllowedStopsPage from '../pages/FreewayAllowedStopsPage';
import FreewaysPage from '../pages/FreewaysPage';
import GeneralDutiesOfDriversPage from '../pages/GeneralDutiesOfDriversPage';
import GeneralRulesPage from '../pages/GeneralRulesPage';
import HinderingTrafficPage from '../pages/HinderingTrafficPage';
import ImportantRulesPage from '../pages/ImportantRulesPage';
import IndicatingPage from '../pages/IndicatingPage';
import NotAllowedOnFreewaysPage from '../pages/NotAllowedOnFreewaysPage';
import OvertakingPage from '../pages/OvertakingPage';
import ParkingPage from '../pages/ParkingPage';
import PedestrianCrossingPage from '../pages/PedestrianCrossingPage';
import ProcessOfDefensiveDrivingPage from '../pages/ProcessOfDefensiveDrivingPage';
import RacingOnPublicRoadsPage from '../pages/RacingOnPublicRoadsPage';
import ReversingPage from '../pages/ReversingPage';
import RoundaboutsPage from '../pages/RoundaboutsPage';
import SafetyMarkingsPage from '../pages/SafetyMarkingsPage';
import SeatLimitsPage from '../pages/SeatLimitsPage';
import SpeedLimitsPage from '../pages/SpeedLimitsPage';
import StepsOfDefensiveDrivingPage from '../pages/StepsOfDefensiveDrivingPage';
import StoppingYourVehiclesPage from '../pages/StoppingYourVehiclesPage';
import TowingPage from '../pages/TowingPage';
import TrianglesPage from '../pages/TrianglesPage';
import TurningLeftPage from '../pages/TurningLeftPage';
import TurningRightPage from '../pages/TurningRightPage';
import TyresPage from '../pages/TyresPage';
import VehicleAccidentsPage from '../pages/VehicleAccidentsPage';
import VehiclesCausingExcessiveNoisePage from '../pages/VehiclesCausingExcessiveNoisePage';

const RulesRoutes = () => (
  <>
    <Route path="/before-your-test" element={<BeforeYourTestPage />} />
    <Route path="/getting-started" element={<GettingStartedPage />} />
    <Route path="/introduction" element={<IntroductionPage />} />
    <Route path="/k53-explained" element={<K53ExplainedPage />} />
    <Route path="/learners-licence-disqualifications" element={<LearnersLicenceDisqualificationsPage />} />
    <Route path="/learners-test-details" element={<LearnersTestDetailsPage />} />
    <Route path="/rules-of-the-road" element={<RulesOfTheRoadMapPage />} />
    
    <Route path="/4-steps-of-defensive-driving" element={<StepsOfDefensiveDrivingPage />} />
    <Route path="/abandoned-vehicles-on-public-roads" element={<AbandonedVehiclesPage />} />
    <Route path="/actions-grouped" element={<ActionsGroupedPage />} />
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
    <Route path="/overtaking-or-passing-another-vehicle" element={<OvertakingPage />} />
    <Route path="/parking" element={<ParkingPage />} />
    <Route path="/pedestrian-crossing" element={<PedestrianCrossingPage />} />
    <Route path="/racing-and-sport-on-public-roads" element={<RacingOnPublicRoadsPage />} />
    <Route path="/reversing" element={<ReversingPage />} />
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
  </>
);

export default RulesRoutes;
