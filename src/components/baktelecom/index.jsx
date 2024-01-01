import React, { useState } from "react";
import { FacebookIcon, HomeIcon } from "../../icons";
import Azersu from "../../assets/images/azersu.png";
import Probill from '../../assets/images/probill.svg'
import Domofon from '../../assets/images/domofon.jpg'
import Azeriqaz from '../../assets/images/azeriqaz.jpg'
import Azerisiq from '../../assets/images/azerisiq.jpg'
const Baktelecom = ({active,setActive}) => {
  const [baktelecom, setBaktelecom] = useState([
    {
      photo: `${Azersu}`,
      name:"Azərsu"
    },
    {
      photo: `${Probill}`,
      name:"Probill"
    },
    {
      photo: `${Domofon}`,
      name:"Domofon"
    },
    {
      photo: `${Azeriqaz}`,
      name:"Azəriqaz"
    },
    {
      photo: `${Azerisiq}`,
      name:"Azərişıq"
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
            {active==="baktelecom"? <div className="grid grid-cols-2 w-auto pt-12 gap-24 pb-5 md:grid-cols-4">
                {baktelecom.map((item) => (
                  
                    <div className="flex flex-col w-full items-center justify-center bg-red-300 rounded-xl p-5 gap-4">

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

export default Baktelecom;
