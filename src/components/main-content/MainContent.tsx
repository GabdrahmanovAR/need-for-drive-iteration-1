import React from 'react';
import './MainContent.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import locationIcon from '../../assets/icons/location-icon.svg';
import Button from '../button/Button';
import menuButton from '../../assets/icons/menu_btn_black.svg';
import { IState } from '../../types/state';
import { sidebarMenuAction } from '../../redux/actions/SidebarMenuAction';

interface IProps {
  isOpen: boolean;
  sidebarMenu: (isOpen: boolean) => void,
}

const MainContent = ({ isOpen, sidebarMenu }: IProps) => {
  const handleSidebarBtnClick = () => {
    sidebarMenu(!isOpen);
  };

  return (
    <div className="content">
      <header className="content__header">
        <section className="content__header__title">
          <button
            className="content__header__sidebar-btn"
            type="button"
            onClick={handleSidebarBtnClick}
          >
            <img src={menuButton} alt="Close Icon" />
          </button>
          <h1>Need for drive</h1>
        </section>
        <div className="content__header__location">
          <img src={locationIcon} alt="Location icon" />
          <span>Ульяновск</span>
        </div>
      </header>
      <main className="content__info">
        <div className="content__info__text-block">
          <h1>Каршеринг</h1>
          <h1>Need for drive</h1>
          <p>Поминутная аренда авто твоего города</p>
          <Button text="Забронировать" customClass="content__info__button" />
        </div>
        <div className="content__info__empty" />
      </main>
      <footer className="content__footer">
        <p>© 2016-2019 «Need for drive»</p>
        <p>8 (495) 234-22-44</p>
      </footer>
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
)(MainContent);
