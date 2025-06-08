
import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import StyledButton from '../components/StyledButton';

const slugify = (str) => str.toLowerCase().replace(/['"]/g, '').replace(/\s+/g, '-');

function RoadSignsPage() {
  const sections = [
    "Regulatory Signs",
    "Warning Signs",
    "Guidance and Information Signs",
    "Traffic Signals",
    "Temporary Signs",
  ];

  return (
    <PageLayout
      subtitle={
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
          Road Signs
        </h2>
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

export default RoadSignsPage;
