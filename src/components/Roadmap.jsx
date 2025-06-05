import { Link } from 'react-router-dom';

function RoadMap() {
  const sections = [
    "Introduction",
    "Road Signs",
    "Rules of The Road",
    "Car Controls",
  ];

  return (
    <div className="flex flex-col items-center relative">
      {/* Continuous Vertical Line */}
      <div className="absolute w-1 bg-cyan top-[-10px] bottom-[-10px] left-1/2 transform -translate-x-1/2 z-0"></div>

      {sections.map((section, index) => (
        <div key={index} className="relative flex flex-col items-center z-10">
          <Link
            to={`/${section.toLowerCase().replace(/\s+/g, '-')}`} 
            className="bg-gray-dark text-white font-rajdhani text-lg md:text-xl py-3 md:py-4 px-6 md:px-8 rounded-lg border-2 border-cyan hover:bg-cyan-light hover:border-cyan-light transition-colors duration-200 cursor-pointer text-center my-6"
          >
            {section}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RoadMap;