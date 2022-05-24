import "./HeaderLine.css";

import BackButton from "./BackButton";

import { Link } from "react-router-dom";
import TrashIcon from "./Icons_Component/TrashIcon";

const HeaderLine = (props) => {
  return (
    <header className="header-line">
      <Link to="/home">
        <BackButton />
      </Link>

      <h4>{props.title}</h4>
      <TrashIcon />
    </header>
  );
};

export default HeaderLine;
