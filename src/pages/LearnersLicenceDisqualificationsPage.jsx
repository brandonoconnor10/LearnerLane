import { useK53Data } from '../hooks/useK53Data';
import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import StyledButton from '../components/StyledButton';

const LearnersLicenceDisqualificationsPage = () => {
  const { content, loading, error } = useK53Data('Introduction', 'Learners Licence Disqualifications');

  if (loading) return <div className="text-white">Loading...</div>;
  if (error)
    return (
      <div className="text-red-500">
        {error}. Check Airtable for matching records or console logs for details.
      </div>
    );

  // Add line breaks after each sentence
  const formattedContent = content
    ? content.replace(/([.?!])\s+/g, '$1\n')
    : 'No content available.';

  return (
    <PageLayout
      subtitle={
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
          Learners Licence Disqualifications
        </h2>
      }
      contentClassName="justify-start"
    >
      <VerticalLineContainer className="flex flex-col items-center mt-32">
        <div
          className="relative bg-gray-dark text-white p-6 border-2 border-cyan rounded-lg w-full max-w-2xl text-center leading-relaxed"
          style={{
            whiteSpace: 'pre-line',
            fontSize: 'clamp(0.75rem, 1.8vw, 1.25rem)',
          }}
        >
          {formattedContent}
        </div>

        <StyledButton
          to="/learners-licence-disqualifications/quiz"
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

export default LearnersLicenceDisqualificationsPage;
