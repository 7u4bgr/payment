import React, { useState } from 'react';
import Kassam from '../../components/kassam';
import Baktelecom from '../../components/baktelecom';
import HomePhone from '../../components/homephone';
import Wifi from '../../components/wifi';
import TV from '../../components/tv';
import Bank from '../../components/bank';
import Sigorta from '../../components/sigorta';
import Store from '../../components/store';
import Iconlar from '../../components/iconlar';

const Home = () => {
  const [active, setActive] = useState("");


  return (
    <div className='flex flex-col items-center justify-center pt-36'>
      <div>

      <Iconlar active={active} setActive={setActive}/>
      </div>
      <div>

      <Kassam active={active} setActive={setActive}/>
      <Baktelecom active={active} setActive={setActive}/>
      <HomePhone active={active} setActive={setActive}/>
      <Wifi active={active} setActive={setActive}/>
      <TV active={active} setActive={setActive}/>
      <Bank active={active} setActive={setActive}/>
      <Sigorta active={active} setActive={setActive}/>
      <Store active={active} setActive={setActive}/>
      </div>
    </div>
  );
};

export default Home;
