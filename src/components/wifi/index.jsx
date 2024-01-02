import React, { useState } from "react";
import { FacebookIcon, HomeIcon, HomePhoneIcon, WifiIcon } from "../../icons";
import Baktelecom from "../../assets/images/ailenet.png";
import Catel from "../../assets/images/baktelecom.png";
import TransEuroCom from "../../assets/images/aztelecom.jpg";
import Ultel from "../../assets/images/adsl.png";
import CityNet from "../../assets/images/citynet.jpg";
import Uninet from "../../assets/images/uninet.png";
import Sazz from "../../assets/images/sazz.jpg";
import Katv from "../../assets/images/katv.jpg";
import Azlink from "../../assets/images/azlink.jpg";
const Wifi = ({ active, setActive }) => {
  const [baktelecom, setBaktelecom] = useState([
    {
      photo: `${Baktelecom}`,
      name: "AiləNET",
    },
    {
      photo: `${Catel}`,
      name: "Baktelecom",
    },
    {
      photo: `${TransEuroCom}`,
      name: "AzTelecom",
    },
    {
      photo: `${Ultel}`,
      name: "ConnectADSL",
    },
    {
      photo: `${CityNet}`,
      name: "CityNet",
    },
    {
      photo: `${Uninet}`,
      name: "Uninet",
    },
    {
      photo: `${Sazz}`,
      name: "Sazz",
    },
    {
      photo: `${Katv}`,
      name: "Katv",
    },
    {
      photo: `${Azlink}`,
      name: "AzLink",
    },
  ]);
  const [information, setInformation] = useState(true);

  return (
    <div>
      <div className="control flex flex-column justify-center h-2">
        <div>
          <div className="divcontrol "></div>
          <>
            {information ? (
              <>
                {active === "wifi" ? (
                  <div className="grid grid-cols-2 w-auto pt-12 gap-20 pb-5 md:grid-cols-4">
                    {baktelecom.map((item) => (
                      <div className="flex flex-col items-center justify-center bg-lime-300 rounded-xl p-5 gap-4 border-double border-4 border-slate-950 p-5">
                        <img className="w-20 h-20 rounded-2xl object-cover" src={item.photo} alt="" />
                        <h2 className="font-mono">{item.name}</h2>
                      </div>
                    ))}
                  </div>
                ) : null}
              </>
            ) : (
              "Hecne yoxdur"
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Wifi;
