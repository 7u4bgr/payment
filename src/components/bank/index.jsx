import React, { useState } from "react";
import { BankIcon, FacebookIcon, HomeIcon, HomePhoneIcon, TVIcon, WifiIcon } from "../../icons";
import Baktelecom from "../../assets/images/kapital.png";
import Catel from '../../assets/images/azkredit.jpg'
import TransEuroCom from '../../assets/images/bankrespublika.jpg'
import Ultel from '../../assets/images/unibank.png'
import CityNet from '../../assets/images/bankofbaku.png'
import PashaBank from '../../assets/images/pashabank.png'


const Bank = ({active,setActive}) => {
  const [baktelecom, setBaktelecom] = useState([
    {
      photo: `${Baktelecom}`,
      name:"Kapital Bank"
    },
    {
      photo: `${Catel}`,
      name:"AzKredit"
    },
  
    {
      photo: `${TransEuroCom}`,
      name:"Bank Respublika"
    },
    {
      photo: `${Ultel}`,
      name:"UniBank"
    },
    {
      photo: `${CityNet}`,
      name:"BankofBaku"
    },
    {
      photo: `${PashaBank}`,
      name:"Paşa Bank"
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
            {active==="bank"? <div className="grid grid-cols-2 w-auto pt-12 gap-20 pb-5 md:grid-cols-4">
                {baktelecom.map((item) => (
                  
                    <div className="flex flex-col items-center justify-center bg-fuchsia-300 rounded-xl p-5 gap-4">

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

export default Bank;
