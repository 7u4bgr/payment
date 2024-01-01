import React, { useState } from "react";
import { SigortaIcon, StoreIcon } from "../../icons";
import Baktelecom from "../../assets/images/kontakt.png";
import Catel from "../../assets/images/bakuelectronics1.png";
import TransEuroCom from "../../assets/images/stargsm.jpg";

const Store = ({ active, setActive }) => {
  const [baktelecom, setBaktelecom] = useState([
    {
      photo: `${Baktelecom}`,
      name: "Kontakt Home",
    },
    {
      photo: `${Catel}`,
      name: "Baku Electronics",
    },

    {
      photo: `${TransEuroCom}`,
      name: "Star GSM",
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
                {active === "store" ? (
                  <div className="grid grid-cols-2 w-auto gap-5 pt-12 pb-5 pl-5 pr-5 md:grid-cols-4">
                    {baktelecom.map((item) => (
                      <div className="flex flex-col items-center justify-center bg-emerald-300 rounded-xl p-5 gap-4">
                        <img className="w-20 h-20" src={item.photo} alt="" />
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

export default Store;
