import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainContent from '../../components/main-content/MainContent';
import Slider from '../../components/slider/Slider';
import './MainPage.scss';
import { getPointsAction } from '../../redux/actions/PointsDataAction';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPointsAction());
  }, []);

  return (
    <main className="main-page">
      <MainContent />
      <Slider />
    </main>
  );
};

export default MainPage;
