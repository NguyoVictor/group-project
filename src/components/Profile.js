import './Profile.module.css';


const Profile = () => {
  return ( 
    <div>
    <h1>Your Profile</h1>
    <div className='user-register'>
    <label>Name</label>
    <input type='text' placeholder='Name' />
    </div>
    </div>
   );
}
 
export default Profile;