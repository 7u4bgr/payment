import React, { useState } from "react";
import {SigortaIcon} from "../../icons";
import Baktelecom from "../../assets/images/pasaheyat.jpg";
import Catel from '../../assets/images/azsigorta.jpg'
import TransEuroCom from '../../assets/images/gala.jpg'



const Sigorta = ({active,setActive}) => {
  const [baktelecom, setBaktelecom] = useState([
    {
      photo: `${Baktelecom}`,
      name:"Paşa Sığorta"
    },
    {
      photo: `${Catel}`,
      name:"AzSığorta"
    },
  
    {
      photo: `${TransEuroCom}`,
      name:"Qala Sığorta"
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
            {active==="sigorta"? <div className="grid grid-cols-2 w-auto pt-12 gap-20 pb-5 md:grid-cols-4">
                {baktelecom.map((item) => (
                  
                    <div className="flex flex-col items-center justify-center bg-teal-300 rounded-xl p-5 gap-4">

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

export default Sigorta;
