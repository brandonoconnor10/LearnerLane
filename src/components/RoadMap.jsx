import VerticalLineContainer from './VerticalLineContainer';
import StyledButton from './StyledButton';

function RoadMap() {
  const sections = [
    "Introduction",
    "Road Signs",
    "Rules of The Road",
  ];

  return (
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