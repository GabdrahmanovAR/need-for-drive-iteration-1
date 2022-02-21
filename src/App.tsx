import React from 'react';
import './App.scss';
import {
  HashRouter, Route, Routes,
} from 'react-router-dom';
import { YMaps } from 'react-yandex-maps';
import Sidebar from './components/sidebar/Sidebar';
import MainPage from './pages/main-page/MainPage';
import SidebarMenu from './components/sidebar/sidebar-menu/SidebarMenu';
import OrderPage from './pages/order-page/OrderPage';

const App = () => (
  <HashRouter>
    <YMaps>
      <div className="main">
        <Sidebar />
        <SidebarMenu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </YMaps>
  </HashRouter>
);

export default App;
