

const Roadmap = () => {
  const sections = [
    'Introduction',
    'Road Signs',
    'Rules of The Road',
    'Car Controls',
  ];  

  return (
    <div className="flex flex-col items-center">
        {sections.map((section, index)=>(
            <div key={index} className="relative flex flex-col items-center">
                {/* button */}
                <button className="bg-gray-dark text-white font-rajdhani text-lg md:text-xl py-3 md:py-4 px-6 md:px-8 rounded-lg border-2 border-cyan hover:bg-cyan-light hover:border-cyan-light transition-colors duration-200 cursor-pointer">{section}</button>
                {/* Connecting Line (except for the last line) */}
                {index < sections.length - 1 && (
                    <div className="w-1 h-6 md:h-8 bg-cyan my-2"></div>
                )}
            </div>
        ))}
    </div>
  )
}

export default Roadmap