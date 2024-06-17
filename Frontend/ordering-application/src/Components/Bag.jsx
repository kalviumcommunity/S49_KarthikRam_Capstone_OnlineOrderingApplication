import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import dummydata from './DummyData.json'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import chapathi from "./Images/chapathi.png";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function Bag() {
  const Navigate = useNavigate();

  const handleBack = ()=>{
    Navigate('/')
  }

  return (
    <div style={{margin: '0vw 4vw'}}>
      <div className='flex' style={{alignItems:'center'}}>
      <MdKeyboardArrowLeft className='back-icon' onClick={handleBack}/>
      <h1 style={{paddingLeft: "1.5vw"}}>Your Bag</h1>
      </div>
      <div className="bag-items" style={{margin: '0vw 18vw',padding:'0 8vw', borderBottom: '1px solid black', maxHeight:'30vw',overflowY:'scroll', scrollbarWidth: 'none'}}>
            {dummydata.map((item)=>{
              return(
                <div key="item.name" >
                  <div className="single-bag-item" style={{backgroundColor: 'white', padding: '0.5vw 0.5vw 0vw 0.5vw', borderRadius: '8px', boxShadow: '4px 4px 1px 1px rgba(0, 0, 0, 0.3'}}>
                  <RxCross2 style={{float: 'right', fontSize: '2rem', color: 'rgba(0,0,0,0.3)'}}/>
                  <div className="imgAndquantity">
                    <div className='flex' style={{flexDirection: 'column', margin: '2vw'}}>
                      <div className='flex'>
                        <img src={chapathi} alt={item.name} className="ItemImage" style={{border: '1px solid black',borderRadius:'8px', padding: '1vw', backgroundColor: '#F8F5ED'}}/>
                        <div style={{marginLeft: '2vw',padding: '1vw', letterSpacing: '0.05em'}}>
                          <h1 style={{margin: '0'}}>{item.name}</h1>
                          <h2 style={{display: 'inline-block',margin: '0'}}>{item.price} / {item.piece}</h2>
                          <h6 style={{display: 'inline-block', marginLeft: '1vw', color: 'rgba(0, 0, 0,0.5'}}>(Price/piece)</h6>
                          <p style={{color: 'rgba(0, 0, 0, 0.7)', margin: '0', fontSize: '0.8rem'}}>{item.desone}<br/>{item.destwo}</p>
                        </div>
                      </div>
                      <div className='flex' style={{justifyContent: 'space-between'}}>
                        <div>
                          <div className="increment flex" style={{justifyContent: 'space-between',alignItems: 'center'}}>
                            <button style={{padding: '0.6vw 1.5vw', backgroundColor: '#89BEB2', boxShadow: '-2px 3px 0px 1px black', height: '2.5vw'}}><FaMinus /></button>
                            <h3 style={{padding: '0.5vw 1.5vw', marginLeft: '2.2vw',border: '1px solid black'}}>3</h3>
                            <button style={{marginLeft: '2.2vw', padding: '0.6vw 1.5vw', backgroundColor: '#89BEB2', boxShadow: '2px 3px 0px 1px black', height: '2.5vw'}}><FaPlus /></button>
                          </div>
                        </div>
                        <div style={{alignSelf: 'flex-end'}}>
                          <p style={{letterSpacing:'0.1em', fontSize: '1.5rem'}}>Total: <u>{item.total}</u></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div style={{padding: '2vw 8vw'}}>
                    <hr style={{ border: 'none',height: '2px',backgroundImage: 'linear-gradient(to right, black 50%, transparent 50%)',backgroundSize: '19px 1px', backgroundRepeat: 'repeat-x'
                    }} />
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flex' style={{marginLeft: 'auto',marginRight:"26vw", maxWidth: '30%', justifyContent: 'space-around', alignItems:'center', border:'1px solid black', marginTop: '1vw',borderRadius: '7px', backgroundColor: 'white'}}>
            <div>
              <p><b>No of items</b></p>
              <p>04</p>
            </div>
            <div>
              <p>Total</p>
              <p><b>80</b></p>
            </div>
            <div>
              <button style={{backgroundColor: "#C7C6F6", border: '1px solid black', padding:'0.2vw 2vw', borderRadius: '5px'}}>Checkout <br />5 items</button>
            </div>
          </div>
    </div>
  )
}

export default Bag