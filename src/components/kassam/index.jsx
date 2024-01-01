import React, { useState } from "react";
import { FacebookIcon } from "../../icons";
import Azercell from "../../assets/images/azercell.png";
import Bakcell from "../../assets/images/bakcell.png";
import Nar from "../../assets/images/nar.png";
const Kassam = ({ active, setActive }) => {
  const [data, setData] = useState([
    {
      photo: `${Azercell}`,
      name: "Azercell",
    },
    {
      photo: `${Bakcell}`,
      name: "Bakcell",
    },
    {
      photo: `${Nar}`,
      name: "Nar Mobile",
    },
  ]);
  const [photo, setPhoto] = useState(true);

  return (
    <div>
      <div className="control flex flex-column">
        <div>
      
          <>
            {photo ? (
              <>
                {active === "kassam" ? (
                  <div className="grid grid-cols-2 justify-center items-center w-full pt-12 gap-20 md:grid-cols-4">
                    {data.map((item) => (
                      <div className="flex flex-col items-center justify-center bg-gray-300 rounded-xl p-5 gap-4">
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

export default Kassam;
