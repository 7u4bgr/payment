import React, { useState } from "react";
import { FacebookIcon, HomeIcon, HomePhoneIcon } from "../../icons";
import Baktelecom from "../../assets/images/baktelecom.png";
import Catel from '../../assets/images/catel.jpg'
import TransEuroCom from '../../assets/images/translogo.png'
import Ultel from '../../assets/images/ultel.png'
const HomePhone = ({active,setActive}) => {
  const [baktelecom, setBaktelecom] = useState([
    {
      photo: `${Baktelecom}`,
      name:"BakTelecom"
    },
    {
      photo: `${Catel}`,
      name:"Catel"
    },
    {
      photo: `${TransEuroCom}`,
      name:"TransEuroCom"
    },
    {
      photo: `${Ultel}`,
      name:"Ultel"
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
            {active==="homephone"? <div className="grid grid-cols-2 w-auto pt-12 gap-12 pb-5 md:grid-cols-4">
                {baktelecom.map((item) => (
                  
                    <div className="flex flex-col items-center justify-center bg-orange-300 rounded-xl p-5 gap-4">

                  <img className="w-20 h-20" src={item.photo} alt="" />
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

export default HomePhone;
