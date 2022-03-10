import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import menuButton from '../../assets/icons/menu_btn_black.svg';
import locationIcon from '../../assets/icons/location-icon.svg';
import { IState } from '../../types/state';
import { sidebarMenuAction } from '../../redux/actions/SidebarMenuAction';
import './Header.scss';
import { EMPTY_STRING } from '../../constants/common';

interface IHeaderProps {
  isOpen: boolean;
  sidebarMenu: (isOpen: boolean) => void,
  customClass: string,
}

const Header: FC<IHeaderProps> = ({ isOpen, sidebarMenu, customClass }) => {
  const handleMenuBtnClick = () => {
    sidebarMenu(!isOpen);
  };

  return (
    <header className={`header ${customClass !== EMPTY_STRING && customClass}`}>
      <section className="header__title">
        <button
          className="header__menu-btn"
          type="button"
          onClick={handleMenuBtnClick}
        >
          <img src={menuButton} alt="Close Icon" />
        </button>
        <h1><a className="header__title__link" href="/need-for-drive-iteration-1">Need for drive</a></h1>
      </section>
      <div className="header__location">
        <img src={locationIcon} alt="Location icon" />
        <span>Ульяновск</span>
      </div>
    </header>
  );
};

export default connect(
  (state: IState) => ({
    isOpen: state.sidebarMenu.isOpen,
    customClass: state.header.customClass,
  }),
  (dispatch) => ({
    sidebarMenu: bindActionCreators(sidebarMenuAction, dispatch),
  }),
)(Header);
