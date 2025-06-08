
import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import StyledButton from '../components/StyledButton';
import QuizLink from '../components/QuizLink';

const slugify = (str) => str.toLowerCase().replace(/['"]/g, '').replace(/\s+/g, '-');



function GuidanceAndInfoSignsPage() {
  const sections = [
    "Location Sign Symbols",
    "Direction Sign Symbols",
    "Diagrammatic Sign Symbols",
    "Location Signs",
    "Route Marker Signs",
    "Direction Signs",
    "Freeway Direction Signs",
    "Tourism Sign Symbols",
    "Information Signs",
  ];

  return (
    <PageLayout
      subtitle={
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
          Guidance And Information Signs
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
            <QuizLink section={section} index={index} />
          </div>
        ))}
      </VerticalLineContainer>
    </PageLayout>
  );
}

export default GuidanceAndInfoSignsPage;