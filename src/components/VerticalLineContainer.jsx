const VerticalLineContainer = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col items-center relative w-full ${className}`}>
      <div className="absolute w-1 bg-cyan top-0 bottom-0 left-1/2 transform -translate-x-1/2 z-0"></div>
      <div className="flex flex-col items-center w-full space-y-6 z-10">
        {children}
      </div>
    </div>
  );
};

export default VerticalLineContainer;
