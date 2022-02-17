import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import MainPage from './pages/main-page/MainPage';

const App = () => (
  <div className="main">
    <aside className="main__sidebar">
      <Sidebar />
    </aside>
    <main className="main__container">
      <MainPage />
    </main>
  </div>
);

export default App;
