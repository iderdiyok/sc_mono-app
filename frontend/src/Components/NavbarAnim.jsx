import "./Navbar.css";
import { NavLink } from "react-router-dom";

import HomeIcon from "./Icons_Component/HomeIcon"
import StatistikIcon from "./Icons_Component/StatistikIcon"
import PlusIcon from "./Icons_Component/PlusIcon"
import WalletIcon from "./Icons_Component/WalletIcon"
import ProfilIcon from "./Icons_Component/ProfilIcon"


const Navbaranim = () => {


const list = document.querySelectorAll(".list")



  return (
    <nav className="navigation-anim">
      <ul>
       <li className="list ">
           <NavLink to="/home" activeClassName="active">
            <span className="icon"> <HomeIcon /></span>
            <span className="text"> Home</span>
           </NavLink>
       </li>
      
       <li className="list">
           <NavLink to="/statistik">
            <span className="icon"> <StatistikIcon /></span>
            <span className="text"> Statistik</span>
           </NavLink>
       </li>
       
       <li className="list">
           <NavLink to="#">
            <span className="icon"> <PlusIcon /></span>
            <span className="text"> Add</span>
           </NavLink>
       </li>
       
       <li className="list">
           <NavLink to="#">
            <span className="icon"> <WalletIcon /></span>
            <span className="text"> Wallet</span>
           </NavLink>
       </li>
       
       <li className="list">
           <NavLink to="/profil">
            <span className="icon"> <ProfilIcon /></span>
            <span className="text"> Profil</span>
           </NavLink>
       </li>
       
        <div className="indicator"></div>

      </ul>
    </nav>
  );
};

export default Navbaranim;
