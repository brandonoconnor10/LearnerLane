import VerticalLineContainer from './VerticalLineContainer';
import StyledButton from './StyledButton';

/**
 * RoadMap component renders a vertical list of navigational buttons
 * for key sections of the learner content. Each button links to a
 * dedicated page for that section.
 */

function RoadMap() {
  // Define the main sections to appear in the roadmap
  const sections = [
    "Introduction",
    "Road Signs",
    "Rules of The Road",
  ];

  return (
      // Wrap buttons in a vertical container with a connecting line
    <VerticalLineContainer>
      {sections.map((section, index) => (
        <div key={index} className="relative flex flex-col items-center z-10">
          <StyledButton
            to={`/${section.toLowerCase().replace(/\s+/g, '-')}`}
            asLink
            variant="small"
            className="my-6"
          >
            {section}
          </StyledButton>
        </div>
      ))}
    </VerticalLineContainer>
  );
}

export default RoadMap;