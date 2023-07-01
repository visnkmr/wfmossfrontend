import { useEffect, useState } from 'react';
import classnames from 'classnames';

interface LetterClampProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

const LetterClamp = ({ text, className, ...props }: LetterClampProps) => {
  const [clamped, setClamped] = useState(true);
  const [letters, setletters] = useState(25);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setletters(25);
      } else if (screenWidth < 1024) {
        setletters(55);
      } else {
        setletters(100);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleClick = () => setClamped(!clamped);

  const toggleClass = () => {
    setClamped(!clamped);
  };

//   const clampedText = clamped ? `${text.split(' ').slice(0, words).join(' ')}...` : text;
  const clampedText = clamped ? `${text.slice(0, letters)}...` : text;

  return (
    <div className='relative'>
      <div className={classnames(className)} onClick={toggleClass} {...props}>
        {clampedText}
        <button onClick={handleClick} className="absolute right-0 bottom-0 text-blue-500 hover:text-blue-700">
          {clamped ? "..." : "<"}
        </button>
      </div>
    </div>
  );
};

export default LetterClamp;