import React, { useState } from "react";
import Kassam from "../../components/kassam";
import Baktelecom from "../../components/baktelecom";
import HomePhone from "../../components/homephone";
import Wifi from "../../components/wifi";
import TV from "../../components/tv";
import Bank from "../../components/bank";
import Sigorta from "../../components/sigorta";
import Store from "../../components/store";
import Iconlar from "../../components/iconlar";
import Wrapper from "../../components/UI";

const Home = () => {
  const [active, setActive] = useState("");

  return (
    <div>
      <Wrapper>
        <div className="flex flex-col justify-center items-center pt-16">
          <h2 className="font-mono font-bold text-3xl bg-black text-white p-5 rounded-2xl border-double border-4 border-sky-500">Ödəniş Üsulları</h2>
        </div>
        <div className="flex flex-col items-center justify-center pt-16">
          <div className="border-dashed border-4 border-sky-500 h-auto p-2 md:p-5">
            <Iconlar active={active} setActive={setActive} />
          </div>
          <div>
            <Kassam active={active} setActive={setActive} />
            <Baktelecom active={active} setActive={setActive} />
            <HomePhone active={active} setActive={setActive} />
            <Wifi active={active} setActive={setActive} />
            <TV active={active} setActive={setActive} />
            <Bank active={active} setActive={setActive} />
            <Sigorta active={active} setActive={setActive} />
            <Store active={active} setActive={setActive} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
