 
 import { BrowserRouter,Routes,Route } from "react-router-dom"
 import './App.css';
 import Home from "./Pages/Home"
 import Search from "./Pages/Search"
 import Library from "./Pages/Library"
 import Profile from "./Pages/Profile"
 import Discover from "./Pages/Discover"
 import Podcast from "./Pages/Podcast"
 
 export default function App(){
  return (
    <div className="container">
<BrowserRouter>
<Routes>
  <Route index element={<Home/>}/>  
  <Route path="/home" element={<Home/>}/>
  <Route path="/search" element={<Search/>}/>
  <Route path="/Library" element={<Library/>}/>
  <Route path="/Profile" element={<Profile/>}/>
  <Route path="/Discover" element={<Discover/>}/>
  <Route path="/Podcast" element={<Podcast/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
 }