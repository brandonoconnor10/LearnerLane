import { useK53Data } from '../hooks/useK53Data';
import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import StyledButton from '../components/StyledButton';

const AlcoholAndNarcoticDrugsPage = () => {
  const { content, loading, error } = useK53Data('Rules Of The Road', 'Alcohol and narcotic drugs');

  if (loading) return null;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-dark text-white font-rajdhani">
        <p className="text-lg text-red-400">
          {error}. Check Airtable for matching records or console logs for details.
        </p>
      </div>
    );
  }

  const formattedContent = content
    ? content.replace(/([.?!])\s+/g, '$1\n')
    : 'No content available.';

  return (
    <PageLayout
      subtitle={
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
           Alcohol and narcotic drugs
        </h2>
      }
      contentClassName="justify-start"
    >
      <VerticalLineContainer className="flex flex-col items-center mt-32">
        <div
          className="relative bg-gray-dark text-white p-6 border-2 border-cyan rounded-lg w-full max-w-2xl text-left leading-relaxed"
          style={{
            whiteSpace: 'pre-line',
            fontSize: 'clamp(0.75rem, 1.8vw, 1.25rem)',
          }}
        >
          {formattedContent}
        </div>

        <StyledButton
          to="/alcohol-and-narcotic-drugs/quiz"
          asLink
          variant="large"
          className="mt-32 mb-6"
        >
          Take Quiz
        </StyledButton>
      </VerticalLineContainer>
    </PageLayout>
  );
};

export default AlcoholAndNarcoticDrugsPage;
