import React, { useState } from "react";
import { FacebookIcon, HomeIcon, HomePhoneIcon, TVIcon, WifiIcon } from "../../icons";
import Baktelecom from "../../assets/images/beeonline.png";
import Catel from '../../assets/images/baktelecom.png'
import TransEuroCom from '../../assets/images/ailetv.jpg'
import Ultel from '../../assets/images/adsl.png'
import CityNet from '../../assets/images/citynet.jpg'
import Uninet from '../../assets/images/uninet.png'
import Sazz from '../../assets/images/sazz.jpg'
import Katv from '../../assets/images/katv.jpg'
import Azlink from '../../assets/images/azlink.jpg'
const TV = ({active,setActive}) => {
  const [baktelecom, setBaktelecom] = useState([
    {
      photo: `${Baktelecom}`,
      name:"BeeOnline"
    },
    {
      photo: `${Katv}`,
      name:"Katv"
    },
    {
      photo: `${Catel}`,
      name:"Baktelecom"
    },
    {
      photo: `${TransEuroCom}`,
      name:"AileTV"
    },
    {
      photo: `${Ultel}`,
      name:"Connect NNTV"
    },
    {
      photo: `${CityNet}`,
      name:"CityNet"
    },

 
 
  ]);
  const [information, setInformation] = useState(true);

  return (
    <div>
      <div className="control flex flex-column justify-center h-2">
        <div>
          <div className="divcontrol ">
            
          </div>
          <>
            {information ? (<>
            {active==="tv"? <div className="grid grid-cols-2 w-auto pt-12 gap-20 pb-5 md:grid-cols-4">
                {baktelecom.map((item) => (
                  
                    <div className="flex flex-col items-center justify-center bg-cyan-300 rounded-xl p-5 gap-4">

                  <img className="w-20 h-20 rounded-2xl" src={item.photo} alt="" />
                  <h2 className="font-mono">{item.name}</h2>
                    </div>
                 
                ))}
              </div>:null}
            
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

export default TV;
