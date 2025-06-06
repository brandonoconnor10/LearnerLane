import React, { useState } from 'react';
import { useQuizData } from '../hooks/useQuizData';
import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';

const K53ExplainedQuizPage = () => {
  const { content, options, answer, loading, error } = useQuizData('Revision Test', 'Introduction to K53');
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return (
    <div className="text-red-500">
      {error}. Check Airtable for matching records or console logs for details.
    </div>
  );

  const handleOptionClick = (option, index) => {
    setSelectedOption(index);
    if (option === answer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect. Try again!');
    }
  };

  return (
    <PageLayout
      subtitle={
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
          K53 Explained
        </h2>
      }
      contentClassName="justify-start"
    >
      <VerticalLineContainer className="flex flex-col items-center mt-32 max-h-[70vh] px-8">
        {/* Question Box */}
        <div className="relative bg-gray-dark text-white p-6 border-2 border-cyan rounded-lg w-full max-w-3xl h-[100px] flex items-center justify-center text-center text-xl leading-relaxed font-rajdhani">
          {content || 'No question available.'}
        </div>

        {/* Options Blocks in 2x2 Grid */}
        <div className="grid grid-cols-2 gap-6 mt-8 w-full max-w-3xl">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option, index)}
              className={`relative bg-gray-dark text-white p-6 border-2 border-cyan rounded-lg text-left text-base font-inter hover:bg-cyan-light hover:border-cyan-light transition-colors duration-200 min-h-[120px] flex items-center ${
                selectedOption === index ? (feedback === 'Correct!' ? 'bg-green-500' : 'bg-red-500') : ''
              }`}
            >
              <span className="mr-2">{String.fromCharCode(97 + index)})</span>
              <span className="leading-normal">{option}</span>
            </button>
          ))}
        </div>

        {/* Feedback */}
        {feedback && (
          <div className="mt-4 text-lg font-inter text-center">
            {feedback}
          </div>
        )}
      </VerticalLineContainer>
    </PageLayout>
  );
};

export default K53ExplainedQuizPage;