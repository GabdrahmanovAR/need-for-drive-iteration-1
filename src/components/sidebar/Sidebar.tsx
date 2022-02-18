import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import menuButton from '../../assets/icons/menu_btn.svg';
import './Sidebar.scss';
import { IState } from '../../types/state';
import { sidebarMenuAction } from '../../actions/SidebarMenuAction';
import LangButton from '../lang-button/LangButton';

interface IProps {
  isOpen: boolean;
  sidebarMenu: (isOpen: boolean) => void,
}

const Sidebar = ({ isOpen, sidebarMenu }: IProps) => {
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
      <footer>
        <LangButton />
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
