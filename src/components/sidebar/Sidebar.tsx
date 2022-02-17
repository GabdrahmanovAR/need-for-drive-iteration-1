import React, { useState } from 'react';
import menuButton from '../../assets/icons/menu_btn.svg';
import menuCloseButton from '../../assets/icons/menu_close_btn.svg';
import './Sidebar.scss';
import { ENG_LANG, RU_LANG } from '../../constants/common';
import SidebarMenu from './sidebar-menu/SidebarMenu';

const Sidebar = () => {
  const [langActive, setLangActive] = useState(ENG_LANG);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLangChange = () => {
    setLangActive(langActive === ENG_LANG ? RU_LANG : ENG_LANG);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sidebar">
      <header>
        {menuOpen
          ? (
            <button
              className="sidebar__button"
              type="button"
              onClick={handleMenuClick}
            >
              <img className="sidebar__button" src={menuCloseButton} alt="Close Icon" />
            </button>
          )
          : (
            <button
              className="sidebar__button"
              type="button"
              onClick={handleMenuClick}
            >
              <img className="sidebar__button" src={menuButton} alt="Open Icon" />
            </button>
          )}
      </header>
      <footer className="sidebar__lang">
        <button
          type="button"
          onClick={handleLangChange}
          className={`sidebar__lang__btn ${langActive === ENG_LANG && 'sidebar__lang_active'}`}
        >
          Eng
        </button>
        <button
          type="button"
          onClick={handleLangChange}
          className={`sidebar__lang__btn ${langActive === RU_LANG && 'sidebar__lang_active'}`}
        >
          Рус
        </button>
      </footer>
      <SidebarMenu isOpen={menuOpen} />
    </div>
  );
};
export default Sidebar;
