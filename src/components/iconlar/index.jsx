import React from "react";
import {
  BankIcon,
  FacebookIcon,
  HomeIcon,
  HomePhoneIcon,
  SigortaIcon,
  StoreIcon,
  TVIcon,
  WifiIcon,
} from "../../icons";

const Iconlar = ({ active, setActive }) => {
  const clickHandler = () => {
    setActive("kassam");
  };
  const clickHandler1 = () => {
    setActive("baktelecom");
  };
  const clickHandler2 = () => {
    // setInformation(!information);
    setActive("homephone");
  };
  const clickHandler3 = () => {
    // setInformation(!information);
    setActive("wifi");
  };
  const clickHandler4 = () => {
    // setInformation(!information);
    setActive("tv");
  };
  const clickHandler5 = () => {
    // setInformation(!information);
    setActive("bank");
  };
  const clickHandler6 = () => {
    // setInformation(!information);
    setActive("sigorta");
  };
  const clickHandler7 = () => {
    // setInformation(!information);
    setActive("store");
  };
  return (
    <div className="grid grid-cols-4 w-full gap-5 md:grid-cols-8 md:gap-20">
      <button
        title="Mobil Şəbəkələr"
        onClick={() => clickHandler()}
        className="border-none bg-gray-400 p-4 rounded"
      >
        <FacebookIcon />
      </button>
      <button
        title="Komunnal Ödənişlər"
        onClick={() => clickHandler1()}
        className="border-none bg-red-400 p-4 rounded"
      >
        <HomeIcon />
      </button>
      <button
        title="Ev Telefonları"
        onClick={() => clickHandler2()}
        className="border-none bg-amber-400 p-4 rounded"
      >
        <HomePhoneIcon />
      </button>
      <button
        title="Wifi"
        onClick={() => clickHandler3()}
        className="border-none bg-lime-400 p-4 rounded"
      >
        <WifiIcon />
      </button>
      <button
        title="TV"
        onClick={() => clickHandler4()}
        className="border-none bg-cyan-400 p-4 rounded"
      >
        <TVIcon />
      </button>
      <button
        title="Bank"
        onClick={() => clickHandler5()}
        className="border-none bg-fuchsia-400 p-4 rounded"
      >
        <BankIcon />
      </button>
      <button
        title="Sığorta"
        onClick={() => clickHandler6()}
        className="border-none bg-teal-400 p-4 rounded"
      >
        <SigortaIcon />
      </button>
      <button
        title="Store"
        onClick={() => clickHandler7()}
        className="border-none bg-emerald-400 p-4 rounded"
      >
        <StoreIcon />
      </button>
    </div>
  );
};

export default Iconlar;
