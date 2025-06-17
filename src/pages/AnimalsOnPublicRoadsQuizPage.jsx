import React, { useState } from 'react';
import { useQuizData } from '../hooks/useQuizData';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import PulseLoader from '../components/PulseLoader';

const AnimalsOnPublicRoadsQuizPage = () => {
  const { questions, loading, error } = useQuizData('Revision Test', 'Animals on Public Roads');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  if (loading) return <PulseLoader />;
  if (error) return (
    <div className="text-red-500">
      {error}. Check Airtable for matching records or console logs for details.
    </div>
  );

  const currentQuestion = questions[currentIndex];
  const { content, options, answer } = currentQuestion;

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      navigate('/rules-of-the-road');
    }
  };

  return (
    <PageLayout
      subtitle={
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
            Animals on Public Roads
        </h2>
      }
      contentClassName="justify-start"
    >
      <VerticalLineContainer className="flex flex-col items-center mt-32 max-h-[70vh] px-8">
        <div className="relative bg-gray-dark text-white p-6 border-2 border-cyan rounded-lg w-full max-w-3xl h-[100px] flex items-center justify-center text-center text-xl leading-relaxed font-rajdhani">
          {content || 'No question available.'}
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8 w-full max-w-3xl">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`relative bg-gray-dark text-white p-6 border-2 border-cyan rounded-lg text-left font-inter hover:bg-cyan-light hover:border-cyan-light transition-colors duration-200 min-h-[120px] flex items-center ${
                selectedOption === index ? (option === answer ? 'bg-green-500' : 'bg-red-500') : ''
              }`}
            >
              <span className="mr-2">{`${String.fromCharCode(97 + index)})`}</span>
              <span className={`leading-normal ${option.length < 30 ? 'text-lg' : 'text-base'}`}>{option}</span>
            </button>
          ))}
        </div>

        {selectedOption !== null && options[selectedOption] === answer && (
          <button
            onClick={handleNext}
            className="mt-12 px-6 py-3 bg-cyan text-white rounded-lg hover:bg-cyan-light transition-colors duration-200 text-lg font-inter"
          >
            {currentIndex < questions.length - 1 ? 'Next Question' : 'Rules of the Road'}
          </button>
        )}
      </VerticalLineContainer>
    </PageLayout>
  );
};

export default AnimalsOnPublicRoadsQuizPage;