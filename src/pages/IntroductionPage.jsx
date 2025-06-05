import Title from '../components/Title';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function IntroductionPage() {
  const sections = [
    "K53 Explained",
    "Getting Started",
    "Learner's Test Details",
    "Learner's Licence Disqualifications",
    "Before Your Test",
  ];

  return (
    <div className="min-h-screen bg-navy-dark text-white flex flex-col items-center justify-start p-4">
      {/* Header */}
      <div className="w-full text-center">
        <Title />
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
          Introduction
        </h2>
      </div>

      {/* Sections with Lines */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="mt-6 w-full max-w-md relative flex flex-col items-center">
          {/* Continuous Vertical Line */}
          <div className="absolute w-1 bg-cyan top-[-10px] bottom-[-10px] left-1/2 transform -translate-x-1/2 z-0"></div>

          {/* Section Buttons and Lines */}
          {sections.map((section, index) => (
            <div key={index} className="relative w-full flex flex-col items-center z-10">
              {/* Button */}
              <div className="relative flex items-center w-full justify-center my-6">
                <button className="bg-gray-dark text-white font-rajdhani text-lg md:text-xl py-4 md:py-5 px-8 md:px-10 rounded-lg border-2 border-cyan hover:bg-cyan-light hover:border-cyan-light transition-colors duration-200 cursor-pointer text-center">
                  {section}
                </button>
                {/* Horizontal Line Connection Point (hidden, for reference) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-1 bg-transparent z-20"></div>
              </div>

              {/* Horizontal Line and Quiz Link (except for the last section) */}
              {index < sections.length - 1 && (
                <div className="relative flex items-center w-full justify-center mb-6 mt-2">
                  {index % 2 !== 0 ? (
                    // Left Side (Odd Index: 1, 3)
                    <>
                      <div className="absolute left-0 right-[calc(50%)] h-0.5 bg-cyan z-0"></div>
                      <Link
                        to={`/${section.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}/quiz`}
                        className="absolute left-0 text-cyan text-sm md:text-base font-inter"
                        style={{ transform: 'translateX(-120%)' }}
                      >
                        Quiz
                      </Link>
                    </>
                  ) : (
                    // Right Side (Even Index: 0, 2)
                    <>
                      <div className="absolute left-[calc(50%)] right-0 h-0.5 bg-cyan z-0"></div>
                      <Link
                        to={`/${section.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}/quiz`}
                        className="absolute right-0 text-cyan text-sm md:text-base font-inter text-right"
                        style={{ transform: 'translateX(120%)' }}
                      >
                        Quiz
                      </Link>
                    </>
                  )}
                </div>
              )}

              {/* Additional Quiz Link for the last section (right side) */}
              {index === sections.length - 1 && (
                <div className="relative flex items-center w-full justify-center mt-2">
                  <div className="absolute left-[calc(50%)] right-0 h-0.5 bg-cyan z-0"></div>
                  <Link
                    to={`/${section.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}/quiz`}
                    className="absolute right-0 text-cyan text-sm md:text-base font-inter text-right"
                    style={{ transform: 'translateX(120%)' }}
                  >
                    Quiz
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default IntroductionPage;