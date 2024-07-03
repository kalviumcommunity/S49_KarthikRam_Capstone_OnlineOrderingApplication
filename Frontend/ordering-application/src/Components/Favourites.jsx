import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import {allItems} from './HomePage'
import { MdCurrencyRupee } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";

function Favourites() {

  const Navigate = useNavigate()

  const handleBack = () =>{
    Navigate('/account')
  }
  return (
    <div style={{margin: '2vw 6vw'}}>
      <h1 className='flex' style={{alignItems: 'center'}}><MdKeyboardArrowLeft className='back-icon' onClick={handleBack}/>Your Favourites</h1>
      <div className="fav-grid" style={{margin: '3vw 4vw'}}>
        <div className="fav-item">
          <div className="fav-item-image-div"><img src={allItems.chapathi} alt="chapathi" className="fav-item-image"/></div>
          <div className="flex fav-item-div-two">
            <div>
              <p className="fav-item-name">Chapathi</p>
              <p className="flex fav-item-price"><MdCurrencyRupee/>40</p>
            </div>
            <div><IoStarSharp className="fav-icon"/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favourites