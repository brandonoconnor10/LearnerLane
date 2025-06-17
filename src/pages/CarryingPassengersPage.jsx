import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { useK53Data } from '../hooks/useK53Data';
import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import StyledButton from '../components/StyledButton';
import PulseLoader from '../components/PulseLoader';

const CarryingPassengersPage = () => {
  const { content, loading, error } = useK53Data('Rules Of The Road', 'Carrying Passengers');
  const [lines, setLines] = useState([]);
  const [checkedLines, setCheckedLines] = useState([]);

  useEffect(() => {
    if (content) {
      const splitLines = content.split(/(?<=[.?!])\s+/);
      setLines(splitLines);
      setCheckedLines(new Array(splitLines.length).fill(false));
    }
  }, [content]);

  const toggleCheck = (index) => {
    setCheckedLines((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

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
        <p className="text-lg text-red-400">
          {error}. Check Airtable for matching records or console logs for details.
        </p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-dark text-white font-rajdhani">
        <p className="text-lg">No content available.</p>
      </div>
    );
  }

  const allChecked = checkedLines.every(Boolean);

  return (
    <PageLayout
      subtitle={
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
          Carrying Passengers
        </h2>
      }
      contentClassName="justify-start"
    >
      <VerticalLineContainer className="flex flex-col items-center mt-32 px-4 max-w-3xl mx-auto w-full">
        <div
          className="relative bg-gray-dark text-white p-6 border-2 border-cyan rounded-lg w-full max-w-2xl text-left leading-relaxed"
          style={{ fontSize: 'clamp(0.8rem, 1.8vw, 1.25rem)' }}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-cyan/30 last:border-b-0 py-2"
            >
              <p className="flex-grow pr-4">{line}</p>
              <button
                onClick={() => toggleCheck(i)}
                aria-label={checkedLines[i] ? 'Mark as unread' : 'Mark as read'}
                className="text-cyan hover:text-cyan-light transition-colors duration-200 focus:outline-none"
                type="button"
              >
                {checkedLines[i] ? (
                  <FaCheckCircle size={24} />
                ) : (
                  <FaRegCircle size={24} />
                )}
              </button>
            </div>
          ))}
        </div>

        <StyledButton
          to="/carrying-passengers/quiz"
          asLink
          variant="large"
          className={`mt-12 mb-6 transition-opacity duration-300 ${
            allChecked ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={(e) => {
            if (!allChecked) e.preventDefault();
          }}
          aria-disabled={!allChecked}
        >
          Take Quiz
        </StyledButton>
      </VerticalLineContainer>
    </PageLayout>
  );
};

export default CarryingPassengersPage;