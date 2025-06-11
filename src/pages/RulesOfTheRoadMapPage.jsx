import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import StyledButton from '../components/StyledButton';
import { useK53Data } from '../hooks/useK53Data';

const slugify = (str) =>
  str.toLowerCase().replace(/['"]/g, '').replace(/\s+/g, '-');

function RulesOfTheRoadMapPage() {
  const { content, loading, error } = useK53Data("Rules Of The Road", "Rule Of The Road");

  const sections = [
    "General Rules",
    "Driving on a divided road",
    "Driving on the shoulder of the road",
    "Parking",
    "Overtaking or passing another vehicle",
    "Being Overtaken",
    "Cross or entering a public road or traffic lane",
    "Signals / Indicating",
    "Turning Left",
    "Turning Right",
    "Mini-traffic circles and Roundabouts",
    "Stopping your vehicle",
    "Compulsory Stops",
    "General Duties of drivers and passengers",
    "Duties relating to motorcycles, tricycles and quad-bikes",
    "Vehicles causing excessive noise",
    "Pedestrian's right of way at a pedestrian crossing",
    "Racing and sport on public roads",
    "Hindering or obstructing traffic on a public road",
    "Abandoned vehicles on public roads",
    "Damage to public roads",
    "Freeways",
    "Not allowed on Freeways",
    "Freeway Allowed Stops",
    "Towing",
    "Speed Limits",
    "Seat Limits",
    "Tyres",
    "Lights",
    "Vehicle Accidents",
    "Important Rules",
    "Alcohol and narcotic drugs",
    "Triangles",
    "Carrying Passengers",
    "Animals on public roads",
    "Carrying a load",
    "Safety Markings",
    "Reversing",
    "Defensive Driving",
    "4 Steps of Defensive Driving",
    "The Process of defensive driving",
    "Actions Grouped",
    "Variations",


  ];

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-dark text-white font-rajdhani">
        <p className="text-lg text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <PageLayout
      subtitle={
        <>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
            Rules Of The Road
          </h2>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-4xl rounded-2xl border-2 border-cyan p-6 md:p-8 bg-white/5 backdrop-blur-md text-white font-rajdhani text-base md:text-lg text-center leading-relaxed">
              <p>{content}</p>
            </div>
          </div>
        </>
      }
      contentClassName="justify-start"
    >
      <VerticalLineContainer className="mt-6">
        {sections.map((section, index) => (
          <div key={index} className="relative flex flex-col items-center z-10">
            <StyledButton
              to={`/${slugify(section)}`}
              asLink
              variant="large"
              className="my-6"
            >
              {section}
            </StyledButton>
          </div>
        ))}
      </VerticalLineContainer>
    </PageLayout>
  );
}

export default RulesOfTheRoadMapPage;
