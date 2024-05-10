import './Account.css'
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import {IoStarSharp} from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { PiPaperPlaneTiltDuotone } from "react-icons/pi";

function Account() {
  return (
    <div className='account'>
      <div className="account-offer">
        <div className="account-offer-display">
          Random img
        </div>
        <div className="account-offer-wordings">
          name
        </div>
      </div>
      <div className='review-button'>
        <button>Add a review <span><PiPaperPlaneTiltDuotone /></span></button>
      </div>
      <div className="account-grid">
        <div className="profile account-grid-border">
          <div className="account-profile-image account-gird-images flex">
            <CgProfile style={{fontSize: '7rem'}}/>
          </div>
          <div className="account-profile-name account-gird-names flex" style={{backgroundColor: '#EA9A3C'}}>
            name
          </div>
        </div>
        <div className="orders account-grid-border">
          <div className="account-orders-image account-gird-images flex">
            <CiShoppingCart style={{fontSize: '7rem'}}/>
          </div>
          <div className="account-orders-name account-gird-names flex" style={{backgroundColor: '#F0EDE8'}}>
            name
          </div>
        </div>
        <div className="favourites account-grid-border">
          <div className="account-favourites-image account-gird-images flex">
            <IoStarSharp style={{fontSize: '7rem', color:'gold'}}/>
          </div>
          <div className="account-favourites-name account-gird-names flex" style={{backgroundColor: 'gold'}}>
            name
          </div>
        </div>
        <div className="settings account-grid-border">
          <div className="account-settings-image account-gird-images flex">
            <IoSettingsOutline style={{fontSize: '7rem'}}/>
          </div>
          <div className="account-settings-name account-gird-names flex" style={{backgroundColor: '#89BEB2'}}>
            name
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account