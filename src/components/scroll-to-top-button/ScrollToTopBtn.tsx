import React, { FC } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import { ScrollToTop } from '../../utils/ScrollToTop';
import './ScrollToTopBtn.scss';

interface IScrollToTopProps {
  isVisible: boolean;
}

const ScrollToTopBtn: FC<IScrollToTopProps> = ({ isVisible }) => (
  <div className="scroll-to-top">
    {isVisible && (
    <div onClick={ScrollToTop} role="presentation">
      <ArrowUpOutlined style={{ fontSize: 24 }} />
      {/* <img */}
      {/*  src="https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png" */}
      {/*  alt="Go to top" */}
      {/* /> */}
    </div>
    )}
  </div>
);

export default ScrollToTopBtn;
