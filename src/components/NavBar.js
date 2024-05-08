import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
        <div className='NavBar'>
      <nav>
        <ul>
          <li><a href="./Home">Home</a></li>
          <li><a href="./Search">Search</a></li>
          <li><a href="./Library">Library</a></li>
          <li><a href="./Profile">Profile</a></li>
          <li><a href="./Discover">Discover</a></li>
          <li><a href="./Podcast">Podcast</a></li>
        </ul>
      </nav>
      </div>
    );
  }
}

export default Navbar;