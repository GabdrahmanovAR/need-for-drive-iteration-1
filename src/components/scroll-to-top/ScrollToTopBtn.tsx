import React, { useEffect, useState } from 'react';
import './ScrollToTop.scss';
import { ScrollToTop } from '../../utils/ScrollToTop';

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log('update');
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  window.addEventListener('scroll', toggleVisibility);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={ScrollToTop} role="presentation">
          <img src="https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png" alt="Go to top" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopBtn;
