import { useK53Data } from '../hooks/useK53Data';
import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import StyledButton from '../components/StyledButton';


const GettingStartedPage = () => {
  const { content, loading, error } = useK53Data('Introduction', 'Getting Started');

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return (
    <div className="text-red-500">
      {error}. Check Airtable for matching records or console logs for details.
    </div>
  );

  return (
    <PageLayout
      subtitle={
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
          Getting Started
        </h2>
      }
      contentClassName="justify-start"
    >
      <VerticalLineContainer className="flex flex-col items-center mt-32 max-h-[70vh]">
        <div className="relative bg-gray-dark text-white p-6 border-2 border-cyan rounded-lg w-full max-w-2xl h-[180px] flex items-center justify-center text-center text-xl leading-relaxed">
          {content || 'No content available.'}
        </div>

        <StyledButton
          to="/getting-started/quiz"
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

export default GettingStartedPage;
