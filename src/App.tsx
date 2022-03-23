import React from 'react';
import './App.scss';
import {
  HashRouter, Route, Routes,
} from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import MainPage from './pages/main-page/MainPage';
import SidebarMenu from './components/sidebar/sidebar-menu/SidebarMenu';
import OrderPage from './pages/order-page/OrderPage';
import OrderStatus from './components/order-status/OrderStatus';

const App = () => (
  <HashRouter>
    <div className="main">
      <Sidebar />
      <SidebarMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/order/*" element={<OrderPage />} />
        <Route path="/orderStatus/:orderId" element={<OrderStatus />} />
      </Routes>
    </div>
  </HashRouter>
);

export default App;
