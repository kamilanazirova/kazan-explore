import React from 'react';

import First from './pages/first'
import Transport from './pages/transport'
import Sport from './pages/sport'
import Education from './pages/education'


import './style/first.css'
import './style/transport.css'
import './style/sport.css'
import './style/main.css'
import './style/education.css'



const App = () => {
  return (
    <>
      {location.pathname === "/kazan-explore" && <First />}
      {location.pathname === "/kazan-explore/transport" && <Transport/>}
      {location.pathname === "/kazan-explore/sport" && <Sport/>}
      {location.pathname === "/kazan-explore/education" && <Education/>}
    </>
  );
};

export default App;
