import { Link } from 'react-router-dom';

function RoadMap() {
  const sections = [
    "Introduction",
    "Road Signs",
    "Rules of The Road",
    "Car Controls",
  ];

  return (
    <div className="relative flex flex-col items-center py-20 min-h-[80vh]">
      {/* Vertical line running through the center */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-cyan z-0" />

      {sections.map((section, index) => (
        <div key={index} className="relative z-10 flex flex-col items-center my-10">
          <Link
            to={`/${section.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-gray-dark text-white font-rajdhani text-lg md:text-xl py-3 md:py-4 px-6 md:px-8 rounded-lg border-2 border-cyan hover:bg-cyan-light hover:border-cyan-light transition-colors duration-200 cursor-pointer text-center"
          >
            {section}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RoadMap;
