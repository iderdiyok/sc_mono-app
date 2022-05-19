import "./Profile.css";

import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import HeaderLine from "../Components/HeaderLine";

import ProfilIcon from "../Components/Icons_Component/ProfilIcon";
import LetterIcon from "../Components/Icons_Component/LetterIcon";
import SecurityIcon from "../Components/Icons_Component/LoginAndSecurityIcon";
import DataAndPrivacyIcon from "../Components/Icons_Component/DataAndPrivacyIcon";
import LogoutIcon from "../Components/Icons_Component/LogoutIcon";

const Profile = () => {
  return (
    <main className="profile">
      <HeaderLine title="Profil" />
      <section>
        <div className="center avatar-img">
          <img src="../img/Man_background.png" alt="UserPhoto" />
        </div>
        <h3>Vorname Nachname</h3>
        <h5>vorname@gmail.com</h5>
      </section>
      <section className="list-profil">
        <ul>
          <li>
            <Link to="#">
              <div className="icon-wrapper">
                <ProfilIcon />
              </div>
              Account
            </Link>
          </li>

          <li>
            <Link to="#">
              <div className="icon-wrapper">
                <LetterIcon />
              </div>
              Nachrichten
            </Link>
          </li>

        

          <li>
            <Link to="#">
              <div className="icon-wrapper">
                <SecurityIcon />
              </div>
              Einstellungen
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="icon-wrapper">
                <DataAndPrivacyIcon />
              </div>
              Datenschutz
            </Link>
          </li>
          <li>
            <Link to="/login">
              <div className="icon-wrapper">
                <LogoutIcon />
              </div>
              Logout
            </Link>
          </li>
        </ul>
      </section>
      <Navbar />
    </main>
  );
};

export default Profile;
