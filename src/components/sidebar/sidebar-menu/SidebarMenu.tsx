import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import facebookIcon from '../../../assets/icons/facebook.svg';
import telegramIcon from '../../../assets/icons/telegram.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';
import './SidebarMenu.scss';
import { IState } from '../../../types/state';
import { sidebarMenuAction } from '../../../redux/actions/SidebarMenuAction';
import menuCloseButton from '../../../assets/icons/menu_close_btn.svg';
import LangButton from '../../lang-button/LangButton';

interface IProps {
  isOpen: boolean;
  sidebarMenu: (isOpen: boolean) => void,
}

const SidebarMenu = ({ isOpen, sidebarMenu }: IProps) => {
  const handleSidebarBtnClick = () => {
    sidebarMenu(!isOpen);
  };

  return (
    <div className={`sidebar-menu ${isOpen && 'sidebar-menu_open'}`}>
      <div className="sidebar-menu__btn-block">
        <button
          className="sidebar-menu__button"
          type="button"
          onClick={handleSidebarBtnClick}
        >
          <img src={menuCloseButton} alt="Open Icon" />
        </button>
      </div>
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
      <footer className="sidebar-menu__lang-btn">
        <LangButton />
      </footer>
      <section className="sidebar-menu__empty" />
    </div>
  );
};

export default connect(
  (state: IState) => ({
    isOpen: state.sidebarMenu.isOpen,
  }),
  (dispatch) => ({
    sidebarMenu: bindActionCreators(sidebarMenuAction, dispatch),
  }),
)(SidebarMenu);
