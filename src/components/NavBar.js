import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
        <div className='NavBar'>
      <nav>
        <ul>
          <li><a href="./Home"><button>Home</button></a></li>
          <li><a href="./Search"><button>Search</button></a></li>
          <li><a href="./Library"><button>Library</button></a></li>
          <li><a href="./Profile"><button>Profile</button></a></li>
          <li><a href="./Discover"><button>Discover </button></a></li>
          <li><a href="./Podcast"><button>Podcast</button></a></li>
        </ul>
      </nav>
      </div>
    );
  }
}

export default Navbar;