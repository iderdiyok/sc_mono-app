import "./AddPhotoBtn.css";
import PlusIcon from "./Icons_Component/PlusRoundIcon";

const AddButtonIcon = (props) => {
  return (
    <div className="add-btn-file">
      <label>
        {" "}
        {props.label}
        <div className="add-photo center">
          <PlusIcon />
          <p>{props.text}</p>
          <input type="file" />
        </div>
      </label>
    </div>
  );
};

export default AddButtonIcon;
