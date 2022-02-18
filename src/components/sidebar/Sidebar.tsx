import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import menuButton from '../../assets/icons/menu_btn.svg';
import './Sidebar.scss';
import { ENG_LANG, RU_LANG } from '../../constants/common';
import { IState } from '../../types/state';
import { sidebarMenuAction } from '../../actions/SidebarMenuAction';

interface IProps {
  isOpen: boolean;
  sidebarMenu: (isOpen: boolean) => void,
}

const Sidebar = ({ isOpen, sidebarMenu }: IProps) => {
  const [langActive, setLangActive] = useState(ENG_LANG);

  const handleLangChange = () => {
    setLangActive(langActive === ENG_LANG ? RU_LANG : ENG_LANG);
  };

  const handleSidebarBtnClick = () => {
    sidebarMenu(!isOpen);
  };

  return (
    <div className="sidebar">
      <header>
        <button
          className="sidebar__button"
          type="button"
          onClick={handleSidebarBtnClick}
        >
          <img src={menuButton} alt="Close Icon" />
        </button>
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
)(Sidebar);
