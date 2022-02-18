import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import MainPage from './pages/main-page/MainPage';
import SidebarMenu from './components/sidebar/sidebar-menu/SidebarMenu';

const App = () => (
  <div className="main">
    <Sidebar />
    <SidebarMenu />
    <MainPage />
  </div>
);

export default App;
