import { Route } from 'react-router-dom';

import CommandSignsPage from '../pages/CommandSignsPage';
import ComprehensionSignsPage from '../pages/ComprehensionSignsPage';
import ControlSignsPage from '../pages/ControlSignsPage';
import DerestrictionSignsPage from '../pages/DerestrictionSignsPage';
import DiagrammaticSignSymbolsPage from '../pages/DiagrammaticSignSymbolsPage';
import DirectionOfMovementSignsPage from '../pages/DirectionOfMovementSignsPage';
import DirectionSignSymbolsPage from '../pages/DirectionSignSymbolsPage';
import DirectionSignsPage from '../pages/DirectionSignsPage';
import ExclusiveSecondarySignsPage from '../pages/ExclusiveSecondarySignsPage';
import FlagSignalsPage from '../pages/FlagSignalsPage';
import FreewayDirectionSignsPage from '../pages/FreewayDirectionSignsPage';
import GuidanceAndInfoSignsPage from '../pages/GuidanceAndInfoSignsPage';
import HandSignalsPage from '../pages/HandSignalsPage';
import HazardMarkerSignsPage from '../pages/HazardMarkerSignsPage';
import InformationSignsPage from '../pages/InformationSignsPage';
import LocationSignSymbolsPage from '../pages/LocationSignSymbolsPage';
import LocationSignsPage from '../pages/LocationSignsPage';
import OverheadLaneDirectionControlArrowsPage from '../pages/OverheadLaneDirectionControlArrowsPage';
import ProhibitionSignsPage from '../pages/ProhibitionSignsPage';
import RegulatorySignsPage from '../pages/RegulatorySignsPage';
import ReservationSignPage from '../pages/ReservationSignsPage';
import RoadLayoutSignsPage from '../pages/RoadLayoutSignsPage';
import RoadMarkersPage from '../pages/RoadMarkersPage';
import RoadMarkersSignPage from '../pages/RoadMarkersSignsPage';
import RoadSignsPage from '../pages/RoadSignsPage';
import RouteMarkerSignsPage from '../pages/RouteMarkerSignsPage';
import SelectiveRestrictionSignsPage from '../pages/SelectiveRestrictionSignsPage';
import StandardTrafficSignalsPage from '../pages/StandardTrafficSignalsPage';
import SymbolicSignsPage from '../pages/SymbolicSignsPage';
import TemporaryCommandSignsPage from '../pages/TemporayCommandSignsPage';
import TemporaryControlSignsPage from '../pages/TemporaryControlSignsPage';
import TemporaryDirectionOfMovementSignsPage from '../pages/TemporaryDirectionOfMovementSignsPage';
import TemporaryGuidanceSignsPage from '../pages/TemporaryGuidanceSignsPage';
import TemporaryHazardMarkerSignsPage from '../pages/TemporaryHazardMarkerSignsPage';
import TemporaryInformationSignsPage from '../pages/TemporaryInformationSignsPage';
import TemporaryProhibitionSignsPage from '../pages/TemporaryProhibitionSignsPage';
import TemporaryReservationSignsPage from '../pages/TemporaryReservationSignsPage';
import TemporaryRoadLayoutSignsPage from '../pages/TemporaryRoadLayoutSignsPage';
import TemporarySignCombinationsPage from '../pages/TemporarySignCombinationsPage';
import TemporarySignsPage from '../pages/TemporarySignsPage';
import TemporarySymbolicSignsPage from '../pages/TemporarySymbolicSignsPage';
import TourismSignSymbolsPage from '../pages/TourismSignSymbolsPage';
import TrafficSignalsPage from '../pages/TrafficSignalsPage';
import WarningSignCombinationsPage from '../pages/WarningSignCombinationsPage';
import WarningSignsPage from '../pages/WarningSignsPage';

const SignRoutes = () => (
  <>
    {/* Sign Routes */}
    <Route path="/command-signs" element={<CommandSignsPage />} />
    <Route path="/comprehension-signs" element={<ComprehensionSignsPage />} />
    <Route path="/control-signs" element={<ControlSignsPage />} />
    <Route path="/de-restriction-signs" element={<DerestrictionSignsPage />} />
    <Route path="/diagrammatic-sign-symbols" element={<DiagrammaticSignSymbolsPage />} />
    <Route path="/direction-of-movement-signs" element={<DirectionOfMovementSignsPage />} />
    <Route path="/direction-sign-symbols" element={<DirectionSignSymbolsPage />} />
    <Route path="/direction-signs" element={<DirectionSignsPage />} />
    <Route path="/exclusive-secondary-signs" element={<ExclusiveSecondarySignsPage />} />
    <Route path="/flag-signals" element={<FlagSignalsPage />} />
    <Route path="/freeway-direction-signs" element={<FreewayDirectionSignsPage />} />
    <Route path="/guidance-and-information-signs" element={<GuidanceAndInfoSignsPage />} />
    <Route path="/hand-signals" element={<HandSignalsPage />} />
    <Route path="/hazard-marker-signs" element={<HazardMarkerSignsPage />} />
    <Route path="/information-signs" element={<InformationSignsPage />} />
    <Route path="/location-sign-symbols" element={<LocationSignSymbolsPage />} />
    <Route path="/location-signs" element={<LocationSignsPage />} />
    <Route path="/overhead-lane-direction-control-arrows" element={<OverheadLaneDirectionControlArrowsPage />} />
    <Route path="/prohibition-signs" element={<ProhibitionSignsPage />} />
    <Route path="/regulatory-signs" element={<RegulatorySignsPage />} />
    <Route path="/reservation-signs" element={<ReservationSignPage />} />
    <Route path="/road-layout-signs" element={<RoadLayoutSignsPage />} />
    <Route path="/road-marker-signs" element={<RoadMarkersPage />} />
    <Route path="/road-markers" element={<RoadMarkersSignPage />} />
    <Route path="/road-signs" element={<RoadSignsPage />} />
    <Route path="/route-marker-signs" element={<RouteMarkerSignsPage />} />
    <Route path="/selective-restriction-signs" element={<SelectiveRestrictionSignsPage />} />
    <Route path="/standard-traffic-signals" element={<StandardTrafficSignalsPage />} />
    <Route path="/symbolic-signs" element={<SymbolicSignsPage />} />
    <Route path="/temporary-command-signs" element={<TemporaryCommandSignsPage />} />
    <Route path="/temporary-control-signs" element={<TemporaryControlSignsPage />} />
    <Route path="/temporary-direction-of-movement-signs" element={<TemporaryDirectionOfMovementSignsPage />} />
    <Route path="/temporary-guidance-signs" element={<TemporaryGuidanceSignsPage />} />
    <Route path="/temporary-hazard-marker-signs" element={<TemporaryHazardMarkerSignsPage />} />
    <Route path="/temporary-information-signs" element={<TemporaryInformationSignsPage />} />
    <Route path="/temporary-prohibition-signs" element={<TemporaryProhibitionSignsPage />} />
    <Route path="/temporary-reservation-signs" element={<TemporaryReservationSignsPage />} />
    <Route path="/temporary-road-layout-signs" element={<TemporaryRoadLayoutSignsPage />} />
    <Route path="/temporary-sign-combinations" element={<TemporarySignCombinationsPage />} />
    <Route path="/temporary-signs" element={<TemporarySignsPage />} />
    <Route path="/temporary-symbolic-signs" element={<TemporarySymbolicSignsPage />} />
    <Route path="/tourism-sign-symbols" element={<TourismSignSymbolsPage />} />
    <Route path="/traffic-signals" element={<TrafficSignalsPage />} />
    <Route path="/warning-sign-combinations-signs" element={<WarningSignCombinationsPage />} />
    <Route path="/warning-signs" element={<WarningSignsPage />} />
  </>
);

export default SignRoutes;
