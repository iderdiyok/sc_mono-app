import "./HeaderLine.css"

import BackButton from "./BackButton";
import DotsIcon from "./Icons_Component/DotsIcon";

const HeaderLine = (props) => {
  return (
    <header className="header-line">
      <BackButton />
            <h4>{props.title}</h4>
      <DotsIcon />
    </header>
  );
};

export default HeaderLine;
