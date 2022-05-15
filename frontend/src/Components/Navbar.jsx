import "./Navbar.css";
import { NavLink } from "react-router-dom";

import HomeIcon from "../Components/Icons_Component/HomeIcon"
import StatistikIcon from "../Components/Icons_Component/StatistikIcon"
import PlusIcon from "../Components/Icons_Component/PlusIcon"
import WalletIcon from "../Components/Icons_Component/WalletIcon"
import ProfilIcon from "../Components/Icons_Component/ProfilIcon"


const Navbar = () => {


const list = document.querySelectorAll(".list")

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item) => 
item.addEventListener('click', activeLink))


  return (
    <nav className="navigation">
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

export default Navbar;
