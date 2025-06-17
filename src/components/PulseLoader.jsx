const PulseLoader = ({ className = '' }) => {
  return (
    <div className={`flex justify-center items-center h-screen px-4 ${className}`}>
      <div className="h-5 w-5 bg-cyan-500 rounded-full animate-ping"></div>
    </div>
  );
};

export default PulseLoader;
