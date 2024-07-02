import { useState, useEffect } from "react";
import axios from "axios";
// import { MdKeyboardArrowLeft } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import "./Homepage.css";
import Navbar from "./Navbar";
import eggDosa from "./Images/eggDosa.png";
import plainDosa from "./Images/plainDosa.png";
import gheeRoast from "./Images/gheeRoast.png";
import masalaDosa from "./Images/masalaDosa.png";
import podiDosa from "./Images/podiDosa.png";
import ravaDosa from "./Images/ravaDosa.png";
import uttapam from "./Images/uttapam.png";
import idli from "./Images/idli.png";
import porotta from "./Images/porotta.png";
import vegKothuPorotta from "./Images/kothuPorotta.png";
import eggKothuPorotta from "./Images/kothuPorotta.png";
import chapathi from "./Images/chapathi.png";
import omelette from "./Images/omelette.png";
import halfBoil from "./Images/halfBoil.png";
import fullBoil from "./Images/plainOmlette.png";
import plainOmlette from "./Images/plainOmlette.png";
import lemonRice from "./Images/lemonRice.png";
import pongal from "./Images/pongal.png";
import vegPulao from "./Images/vegPulao.png";
import vada from "./Images/vada.png";
import masalaVada from "./Images/masalaVada.png";

export const allItems = {
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
  omelette,
  halfBoil,
  fullBoil,
  plainOmlette,
  chapathi,
  lemonRice,
  pongal,
  vegPulao,
  vada,
  masalaVada,
}

const DosaMap = {
  eggDosa,
  plainDosa,
  gheeRoast,
  masalaDosa,
  podiDosa,
  ravaDosa,
  uttapam,
};

const IdliMap = {
  idli,
};

const PorottaMap = {
  porotta,
  vegKothuPorotta,
  eggKothuPorotta,
};

const EggMap = {
  omelette,
  halfBoil,
  fullBoil,
  plainOmlette,
};

const ChapathiMap = {
  chapathi,
};

const RiceMap = {
  lemonRice,
  pongal,
  vegPulao,
};

const VadaMap = {
  vada,
  masalaVada,
};

function HomePage() {
  const [apiData, setApidata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get("http://localhost:3000/api/homepage").then((res) => {
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
    <div className="mainHompage">
      <Navbar />
      {/* <MdCheckBox/>
      <MdKeyboardArrowLeft />
      <MdKeyboardArrowRight /> */}
      <div style={{margin: '1vw 5vw'}}>
        <div className="offers">
          <p>Here goes the offer</p>
        </div>
        <p className="offerText">Text</p>
        <p className="offerText">text2</p>
        <div className="Itemsgrid">
          <div className="itembox">
            <p className="item1">Item1</p>
          </div>
          <div className="itembox">
            <p className="item2">Item2</p>
          </div>
          <div className="itembox">
            <p className="item3">Item3</p>
          </div>
          <div className="itembox">
            <p className="item4">Item4</p>
          </div>
          <div className="itembox">
            <p className="item5">Item5</p>
          </div>
          <div className="itembox">
            <p className="item6">Item6</p>
          </div>
          <div className="itembox">
            <p className="item7">Item7</p>
          </div>
          <div className="itembox">
            <p className="item8">Item8</p>
          </div>
          <div className="itembox">
            <p className="item9">Item9</p>
          </div>
          <div className="itembox">
            <p className="item10">Item10</p>
          </div>
        </div>
        <hr />
        <div className="Dosa">
          <h1 className="DosaHeading">Dosa</h1>
          <div className="DosaImage" style={{ textAlign: "center" }}>
            <img src={plainDosa} alt="Dosa" className="DishImage" />
          </div>
          <div className="DosaItems items-grid scroll">
            {apiData
              .filter((item) => item.category == "Dosa")
              .map((item) => {
                const DosaComponent = DosaMap[item.img];
                return (
                  <div key={item.name}>
                      <div key={item._id} className="flex item-main-div">
                        <div className="flex sub-div-one">
                          {DosaComponent && (
                            <img
                              src={DosaComponent}
                              alt={item.name}
                              className="ItemImage"
                            />
                          )}
                        </div>
                        <div className="sub-div-two">
                          <div className="availability">
                            {item.available == true?<p>Available</p> :<p>Not Available</p> }
                          </div>
                          <div className="flex price-icon">
                            <p className="flex"><MdCurrencyRupee/>{item.price}</p>
                            <IoStarSharp className="icon" />
                          </div>
                          <div className="addToCartDiv">
                            <button className="addToCartButton">Add to cart</button>
                          </div>
                        </div>
                        <p className="sub-div-three">{item.name}</p>
                      </div>
                    </div>
                );
              })}
          </div>
        </div>
        <hr />
        <div className="Idli">
          <h1 className="IdliHeading">Idli</h1>
          <div className="IdliImage" style={{ textAlign: "center" }}>
            <img src={idli} alt="Idli" className="DishImage" />
          </div>
          <div className="IdliItems items-grid">
            {apiData
              .filter((item) => item.category == "Idli")
              .map((item) => {
                const IdliComponent = IdliMap[item.img];
                return (
                  <div key={item.name}>
                    
                      <div key={item._id} className="flex item-main-div">
                        <div className="flex sub-div-one">
                          {IdliComponent && (
                            <img
                              src={IdliComponent}
                              alt={item.name}
                              className="ItemImage"
                            />
                          )}
                        </div>
                        <div className="sub-div-two">
                          <div className="availability">
                            {item.available == true?<p>Available</p> :<p>Not Available</p> }
                          </div>
                          <div className="flex price-icon">
                            <p className="flex"><MdCurrencyRupee/>{item.price}</p>
                            <IoStarSharp className="icon" />
                          </div>
                          <div className="addToCartDiv">
                            <button className="addToCartButton">Add to cart</button>
                          </div>
                        </div>
                        <p className="sub-div-three">{item.name}</p>
                      </div>
                    </div>
                );
              })}
          </div>
        </div>
        <hr />
        <div className="Porotta">
          <h1 className="PorottaHeading">Porotta</h1>
          <div className="PorottaImage" style={{ textAlign: "center" }}>
            <img src={porotta} alt="Porotta" className="DishImage" />
          </div>
          <div className="PorottaItems items-grid">
            {apiData
              .filter((item) => item.category == "Porotta")
              .map((item) => {
                const PorottaComponent = PorottaMap[item.img];
                return (
                  <div key={item.name}>
                    
                      <div key={item._id} className="flex item-main-div">
                        <div className="flex sub-div-one">
                          {PorottaComponent && (
                            <img
                              src={PorottaComponent}
                              alt={item.name}
                              className="ItemImage"
                            />
                          )}
                        </div>
                        <div className="sub-div-two">
                          <div className="availability">
                            {item.available == true?<p>Available</p> :<p>Not Available</p> }
                          </div>
                          <div className="flex price-icon">
                            <p className="flex"><MdCurrencyRupee/>{item.price}</p>
                            <IoStarSharp className="icon" />
                          </div>
                          <div className="addToCartDiv">
                            <button className="addToCartButton">Add to cart</button>
                          </div>
                        </div>
                        <p className="sub-div-three">{item.name}</p>
                      </div>
                    </div>
                );
              })}
          </div>
        </div>
        <hr />
        <div className="Egg">
          <h1 className="EggHeading">Egg</h1>
          <div className="EggImage" style={{ textAlign: "center" }}>
            <img src={omelette} alt="Egg" className="DishImage" />
          </div>
          <div className="EggItems items-grid scroll">
            {apiData
              .filter((item) => item.category == "Egg")
              .map((item) => {
                const EggComponent = EggMap[item.img];
                return (
                  <div key={item.name}>
                    
                      <div key={item._id} className="flex item-main-div">
                        <div className="flex sub-div-one">
                          {EggComponent && (
                            <img
                              src={EggComponent}
                              alt={item.name}
                              className="ItemImage"
                            />
                          )}
                        </div>
                        <div className="sub-div-two">
                          <div className="availability">
                            {item.available == true?<p>Available</p> :<p>Not Available</p> }
                          </div>
                          <div className="flex price-icon">
                            <p className="flex"><MdCurrencyRupee/>{item.price}</p>
                            <IoStarSharp className="icon" />
                          </div>
                          <div className="addToCartDiv">
                            <button className="addToCartButton">Add to cart</button>
                          </div>
                        </div>
                        <p className="sub-div-three">{item.name}</p>
                      </div>
                    </div>
                );
              })}
          </div>
        </div>
        <hr />
        <div className="Chapathi">
          <h1 className="ChapathiHeading">Chapathi</h1>
          <div className="ChapathiImage" style={{ textAlign: "center" }}>
            <img src={chapathi} alt="Chapathi" className="DishImage" />
          </div>
          <div className="ChapathiItems items-grid">
            {apiData
              .filter((item) => item.category == "Chapathi")
              .map((item) => {
                const ChapathiComponent = ChapathiMap[item.img];
                return (
                  <div key={item.name}>
                    
                      <div key={item._id} className="flex item-main-div">
                        <div className="flex sub-div-one">
                          {ChapathiComponent && (
                            <img
                              src={ChapathiComponent}
                              alt={item.name}
                              className="ItemImage"
                            />
                          )}
                        </div>
                        <div className="sub-div-two">
                          <div className="availability">
                            {item.available == true?<p>Available</p> :<p>Not Available</p> }
                          </div>
                          <div className="flex price-icon">
                            <p className="flex"><MdCurrencyRupee/>{item.price}</p>
                            <IoStarSharp className="icon" />
                          </div>
                          <div className="addToCartDiv">
                            <button className="addToCartButton">Add to cart</button>
                          </div>
                        </div>
                        <p className="sub-div-three">{item.name}</p>
                      </div>
                    </div>
                );
              })}
          </div>
        </div>
        <hr />
        <div className="Rice">
          <h1 className="RiceHeading">Rice</h1>
          <div className="RiceImage" style={{ textAlign: "center" }}>
            <img src={pongal} alt="Rice" className="DishImage" />
          </div>
          <div className="RiceItems items-grid">
            {apiData
              .filter((item) => item.category == "Rice")
              .map((item) => {
                const RiceComponent = RiceMap[item.img];
                return (
                  <div key={item.name}>
                    
                      <div key={item._id} className="flex item-main-div">
                        <div className="flex sub-div-one">
                          {RiceComponent && (
                            <img
                              src={RiceComponent}
                              alt={item.name}
                              className="ItemImage"
                            />
                          )}
                        </div>
                        <div className="sub-div-two">
                          <div className="availability">
                            {item.available == true?<p>Available</p> :<p>Not Available</p> }
                          </div>
                          <div className="flex price-icon">
                            <p className="flex"><MdCurrencyRupee/>{item.price}</p>
                            <IoStarSharp className="icon" />
                          </div>
                          <div className="addToCartDiv">
                            <button className="addToCartButton">Add to cart</button>
                          </div>
                        </div>
                        <p className="sub-div-three">{item.name}</p>
                      </div>
                    </div>
                );
              })}
          </div>
        </div>
        <hr />
        <div className="Vada">
          <h1 className="VadaHeading">Vada</h1>
          <div className="VadaImage" style={{ textAlign: "center" }}>
            <img src={vada} alt="Vada" className="DishImage" />
          </div>
          <div className="VadaItems items-grid">
            {apiData
              .filter((item) => item.category == "Vada")
              .map((item) => {
                const VadaComponent = VadaMap[item.img];
                return (
                  <div key={item.name}>
                    
                      <div key={item._id} className="flex item-main-div">
                        <div className="flex sub-div-one">
                          {VadaComponent && (
                            <img
                              src={VadaComponent}
                              alt={item.name}
                              className="ItemImage"
                            />
                          )}
                        </div>
                        <div className="sub-div-two">
                          <div className="availability">
                            {item.available == true?<p>Available</p> :<p>Not Available</p> }
                          </div>
                          <div className="flex price-icon">
                            <p className="flex"><MdCurrencyRupee/>{item.price}</p>
                            <IoStarSharp className="icon" />
                          </div>
                          <div className="addToCartDiv">
                            <button className="addToCartButton">Add to cart</button>
                          </div>
                        </div>
                        <p className="sub-div-three">{item.name}</p>
                      </div>
                    </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
