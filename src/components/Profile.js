import './Profile.module.css';


const Profile = () => {
  return ( 
    <div>
    <h1>Your Profile</h1>
    <div className='user-name'>
    <label>Name</label>
    <input type='text' placeholder='enter your name' />
    </div>
    <div className='user-email'>
    <label>Email</label>
    <input type='text' placeholder='enter your email' />
    </div>
    <div className='user-password'>
    <label>Password</label>
    <input type='text' placeholder='enter your password' />
    </div>
    </div>
   );
}
 
export default Profile;