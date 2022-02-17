import React from 'react';
import facebookIcon from '../../../assets/icons/facebook.svg';
import telegramIcon from '../../../assets/icons/telegram.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';
import './SidebarMenu.scss';

interface IProps {
  isOpen: boolean;
}

const SidebarMenu = ({ isOpen }: IProps) => (
  <div className={`sidebar-menu ${isOpen && 'sidebar-menu_open'}`}>
    <section className="sidebar-menu__navigation">
      <nav>
        <ul className="sidebar-menu__navigation__list">
          <li>ПАРКОВКА</li>
          <li>СТРАХОВКА</li>
          <li>БЕНЗИН</li>
          <li>ОБСЛУЖИВАНИЕ</li>
        </ul>
        <div className="sidebar-menu__social-network">
          <img src={telegramIcon} alt="Telegram" />
          <img src={facebookIcon} alt="Facebook" />
          <img src={instagramIcon} alt="Instagram" />
        </div>
      </nav>
    </section>
    <section className="sidebar-menu__empty" />
  </div>
);

export default SidebarMenu;
