import React, { useState, useEffect } from 'react';
import axios from 'axios';
import eggDosa from './Images/eggDosa.png';
import plainDosa from './Images/plainDosa.png';
import gheeRoast from './Images/gheeRoast.png';
import masalaDosa from './Images/masalaDosa.png';
import podiDosa from './Images/podiDosa.png';
import ravaDosa from './Images/ravaDosa.png';
import uttapam from './Images/uttapam.png';
import idli from './Images/idli.png';
import porotta from './Images/porotta.png';
import vegKothuPorotta from './Images/kothuPorotta.png';
import eggKothuPorotta from './Images/kothuPorotta.png';
import chapathi from './Images/chapathi.png';
import omelette from './Images/omelette.png';
import halfBoil from './Images/halfBoil.png';
import fullBoil from './Images/halfBoil.png';
import plainOmlette from './Images/plainOmlette.png'


const imageMap = {
  eggDosa,
  plainDosa,
  gheeRoast,
  masalaDosa,
  podiDosa,
  ravaDosa,
  uttapam,
  idli,
  porotta, 
  vegKothuPorotta,
  eggKothuPorotta,
  chapathi,
  omelette,
  halfBoil,
  fullBoil,
  plainOmlette
};

function HomePage() {
  const [apiData, setApidata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('http://localhost:3000/api/homepage').then((res) => {
          console.log(res.data);
          setApidata(res.data);
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {apiData &&
        apiData.map((item) => {
          const ImageComponent = imageMap[item.img];
          return (
            <div key={item._id}>
              <h1>{item.name}</h1>
              {ImageComponent && <img src={ImageComponent} alt={item.name} />}
              <h3>{item.price}</h3>
              <h3>{item.available}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default HomePage;