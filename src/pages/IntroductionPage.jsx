import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import StyledButton from '../components/StyledButton';
import QuizLink from '../components/QuizLink';

function IntroductionPage() {
  const sections = [
    "K53 Explained",
    "Getting Started",
    "Learner's Test Details",
    "Learner's Licence Disqualifications",
    "Before Your Test",
  ];

  return (
    <PageLayout
      subtitle={
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
          Introduction
        </h2>
      }
      contentClassName="justify-start"
    >
      <VerticalLineContainer className="mt-6">
        {sections.map((section, index) => (
          <div key={index} className="relative flex flex-col items-center z-10">
            <StyledButton variant="large" className="my-6">
              {section}
            </StyledButton>
            <QuizLink section={section} index={index} />
          </div>
        ))}
      </VerticalLineContainer>
    </PageLayout>
  );
}

export default IntroductionPage;