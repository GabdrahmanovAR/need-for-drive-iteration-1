import React from 'react';
import menuButton from '../../assets/icons/menu_btn.svg';
import './Sidebar.scss';

const Sidebar = () => (
  <div className="sidebar">
    <header>
      <img src={menuButton} alt="Menu btn" />
    </header>
    <footer>
      Eng
    </footer>
  </div>
);
export default Sidebar;
