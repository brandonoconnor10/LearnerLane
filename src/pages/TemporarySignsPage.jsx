
import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import StyledButton from '../components/StyledButton';
import QuizLink from '../components/QuizLink';

const slugify = (str) => str.toLowerCase().replace(/['"]/g, '').replace(/\s+/g, '-');



function TemporarySignsPage() {
  const sections = [
   "Temporary Control Signs",
   "Temporary Command Signs",
   "Temporary Prohibition Signs",
   "Temporary Reservation Signs",
   "Temporary Road Layout Signs",
   "Temporary Direction of Movement Signs",
   "Temporary Symbolic Signs",
   "Temporary Hazard Marker Signs",
   "Temporary Guidance Signs",
   "Temporary Information Signs",
   "Temporary Sign Combinations",
  ];

  return (
    <PageLayout
      subtitle={
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
          Temporary Signs
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

export default TemporarySignsPage;