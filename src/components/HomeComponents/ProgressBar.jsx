import { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress1, setProgress1] = useState(20); // Progress for "Pure And Organic"
  const [progress2, setProgress2] = useState(30); // Progress for "Healthy Food"
  useEffect(() => {
    // Function to increment progress for "Pure And Organic"
    const incrementProgress1 = () => {
      setProgress1(prevProgress => {
        if (prevProgress < 70) {
          return prevProgress + 1; // Increment progress
        } else {
          return 70; // Stop at 70%
        }
      });
    };

    // Function to increment progress for "Healthy Food"
    const incrementProgress2 = () => {
      setProgress2(prevProgress => {
        if (prevProgress < 80) {
          return prevProgress + 1; // Increment progress
        } else {
          return 80; // Stop at 80%
        }
      });
    };

    // Set intervals to increment progress every 50ms
    const interval1 = setInterval(incrementProgress1, 50);
    const interval2 = setInterval(incrementProgress2, 50);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="pt-3">
      <div>
        <h2 className='py-3 text-2xl font-medium text-primary flex items-center justify-between'>
          Pure And Organic <span className='py-3 text-2xl font-medium text-primary'>{progress1}%</span>
        </h2>
        <div className="w-full bg-[#E9EFE5] rounded-full h-[10px]">
          <div
            className="bg-third h-[10px] rounded-full"
            style={{ width: `${progress1}%` }}
          ></div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className='py-3 text-2xl font-medium text-primary flex items-center justify-between'>
          Healthy Food <span className='py-3 text-2xl font-medium text-primary'>{progress2}%</span>
        </h2>
        <div className="w-full bg-[#E9EFE5] rounded-full h-[10px]">
          <div
            className="bg-third h-[10px] rounded-full"
            style={{ width: `${progress2}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
