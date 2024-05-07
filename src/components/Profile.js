import { useState } from 'react';
import './Profile.module.css';


const Profile = () => {
  const [passwordVisible,setPasswordVisible] = useState(false);
  return ( 
    <div>
    <h1>Your Profile</h1>
    <div className='user-name'>
    <label>Name</label>
    <input type='text' placeholder='enter your name' />
    </div>
    <div className='user-email'>
    <label>Email</label>
    <input type={passwordVisible? 'text':'password'} placeholder='enter your email' />
    </div>
    <div className='user-password'>
    <label>Password</label>
    <input type='password' placeholder='enter your password' />
    </div>
    </div>
   );
}
 
export default Profile;