import React, { useState } from 'react';
import './Profile.module.css';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState('login'); // login/signup

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormChange = (e) => {
    setFormType(e.target.value);
  };

  return (
    <div>
      <h2>{formType === 'login'? 'User Login ' : 'User Signup '}</h2>
      <div className="imgcontainer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGCTYaq8nlLXM3bauSTaJOKGvty6MYYYEk5UEA4Nj_w&s" alt="user" className="user" />
            </div>
      <button onClick={openModal} style={{ width: 'auto' }}>
        {formType === 'login'? 'Login' : 'Sign Up'}
      </button>

      {isModalOpen && (
        <div className="modal">
          <form className="modal-content animate" action="/action_page.php" method="post">
            

            <div className="container">
              {formType === 'login'? (
                <>
                  <label htmlFor="uname"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="uname" required />
                  <label htmlFor="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />
                </>
              ) : (
                <>
                  <label htmlFor="uname"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="uname" required />
                  <label htmlFor="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />
                  <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                  <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                </>
              )}

              <button type="submit">{formType === 'login'? 'Login' : 'Sign Up'}</button>
              <label>
                <input type="checkbox" checked="checked" name="remember" /> Remember me
              </label>
            </div>

            <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
              <button type="button" onClick={closeModal} className="cancelbtn">Cancel</button>
              <span className="psw">Forgot <a href="http://www.yoursite.com/ResetPassword.aspx?token=Guid-here">password?</a></span>
            </div>
          </form>
        </div>
      )}
      <select onChange={handleFormChange}>
        <option value="login">Login</option>
        <option value="signup">Sign Up</option>
      </select>
    </div>
  );
};

export default Profile;
