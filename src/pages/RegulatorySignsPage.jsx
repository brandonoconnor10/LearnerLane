import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import StyledButton from '../components/StyledButton';
import { useK53Data } from '../hooks/useK53Data';
import PulseLoader from '../components/PulseLoader';

const slugify = (str) =>
  str.toLowerCase().replace(/['"]/g, '').replace(/\s+/g, '-');

function RegulatorySignsPage() {
  const { content, loading, error } = useK53Data('Road Signs', 'Regulatory Signs');

  const sections = [
    'Control Signs',
    'Command Signs',
    'Prohibition Signs',
    'Reservation Signs',
    'Comprehension Signs',
    'De-restriction Signs',
    'Exclusive Secondary Signs',
    'Selective Restriction Signs',
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-dark text-white font-rajdhani">
        <PulseLoader />
      </div>
    );
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
            Regulatory Signs
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

export default RegulatorySignsPage;
