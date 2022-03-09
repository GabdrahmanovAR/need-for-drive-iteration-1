import React, { FC } from 'react';
import { ScrollToTop } from '../../utils/ScrollToTop';
import './ScrollToTopBtn.scss';

interface IScrollToTopProps {
  isVisible: boolean;
}

const ScrollToTopBtn: FC<IScrollToTopProps> = ({ isVisible }) => (
  <div className="scroll-to-top">
    {isVisible && (
    <div onClick={ScrollToTop} role="presentation">
      <img
        src="https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png"
        alt="Go to top"
      />
    </div>
    )}
  </div>
);

export default ScrollToTopBtn;
