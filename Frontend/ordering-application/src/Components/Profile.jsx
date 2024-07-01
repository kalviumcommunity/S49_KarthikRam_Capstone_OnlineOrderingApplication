import React from 'react'
import { MdModeEdit } from "react-icons/md";
import {Link} from 'react-router-dom'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Profile() {

  const Navigate = useNavigate()

  const handleBack = () =>{
    Navigate('/account')
  }
  return (
    <div style={{margin: '2vw 6vw'}}>
      <h1 className='flex' style={{alignItems: 'center'}}><MdKeyboardArrowLeft className='back-icon' onClick={handleBack}/>Profile</h1>
      <div className='personal-data'>
        <div className='general-data'>
          <div className='flex general-data-content' style={{alignItems: 'center'}}>
            <div>
              <p>Name</p>
              <h3>Karthik</h3>
            </div>
            <div>
              <MdModeEdit />
            </div>
          </div>
          <div className='flex general-data-content' style={{alignItems: 'center'}}>
            <div>
              <p>Current address</p>
              <h3>abcxyz</h3>
            </div>
            <div>
              <MdModeEdit />
            </div>
          </div>
          <div className='flex general-data-content' style={{alignItems: 'center'}}>
            <div>
              <p>Email</p>
              <h3>k@gmail.com</h3>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div className='site-data flex'>
          <div>
            <h4><Link to="/orders" className='link-style'>Orders</Link></h4>
            <p>5</p>
          </div>
          <hr/>
          <div>
            <h4><Link to='/review' className='link-style'>Feedbacks</Link></h4>
            <p>5</p>
          </div>
          <hr/>
          <div>
            <h4><Link to="/favourites" className='link-style'>Favourites</Link></h4>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile