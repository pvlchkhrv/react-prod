import React, { Suspense } from 'react';
import { Counter } from './components/Counter';
import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutAsync } from './pages/About/About.async';
import { MainAsync } from './pages/Main/Main.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/'}>Go To Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutAsync/>} />
          <Route path={'/'} element={<MainAsync/>} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};

export default App;
