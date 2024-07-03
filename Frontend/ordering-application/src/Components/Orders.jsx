import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import {allItems} from './HomePage'
import { MdCurrencyRupee } from "react-icons/md";

function Orders() {

  const Navigate = useNavigate()

  const handleBack = () =>{
    Navigate('/account')
  }

  // const now = new Date();

  return (
    <div style={{margin: '2vw 6vw'}}>
      <h1 className='flex' style={{alignItems: 'center'}}><MdKeyboardArrowLeft className='back-icon' onClick={handleBack}/>Your Orders</h1>
      <div className="main-orders">
        <div className="flex order-details">
          <div>
            <p>Order Date</p>
            <h4>July 02, 2024</h4>
          </div>
          <div>
            <p>Status</p>
            <h4>Received</h4>
          </div>
          <div>
            <p>Total</p>
            <h4 className="flex"><MdCurrencyRupee/> 400</h4>
          </div>
          <div>
            <p>Order #:</p>
            <h4>586432</h4>
          </div>
          <div>
            <button className="order-again-btn order-details-btn">Order Again</button>
            <button className="bill-btn order-details-btn" style={{marginLeft: '2vw'}}>View Order</button>
          </div>
        </div>
        <div className="order-items">
          <div className="flex order-items-top">
            <div><img src={allItems.chapathi} alt="chapathi" className="ItemImage"/></div>
            <div>
              <h2>Chappathi</h2>
              <p>5</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <h3 style={{display:'flex'}}><MdCurrencyRupee/>80</h3>
              <button className="buy-it-again-btn">Buy It Again</button>
            </div>
          </div>
          <hr style={{ margin:'0vw 4vw 0vw 4vw', border: 'none',height: '2px',backgroundImage: 'linear-gradient(to right, black 50%, transparent 50%)',backgroundSize: '19px 1px', backgroundRepeat: 'repeat-x'}} />
          <div className="flex order-items-top">
            <div><img src={allItems.chapathi} alt="chapathi" className="ItemImage"/></div>
            <div>
              <h2>Chappathi</h2>
              <p>5</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <h3 style={{display:'flex'}}><MdCurrencyRupee/>80</h3>
              <button className="buy-it-again-btn">Buy It Again</button>
            </div>
          </div>
          <hr style={{ margin:'0vw 4vw 0vw 4vw', border: 'none',height: '2px',backgroundImage: 'linear-gradient(to right, black 50%, transparent 50%)',backgroundSize: '19px 1px', backgroundRepeat: 'repeat-x'}} />
        </div>
      </div>
    </div>
  )
}

export default Orders