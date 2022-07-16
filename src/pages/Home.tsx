import React from 'react'
import Profile from './home/Profile';
import Activities from "./home/Activities";
import { dataContext } from '../contexts/dataContext';

const Home = () => {
  const {currentTime} = React.useContext(dataContext);

  return (
    <main>
      <Profile />
      <Activities time={currentTime}/>
    </main>
  );
}

export default Home