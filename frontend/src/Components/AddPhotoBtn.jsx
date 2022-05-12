import "./AddPhotoBtn.css";
import PlusIcon from "./Icons_Component/PlusRoundIcon";

const AddButtonIcon = () => {
  return (
    <div className="add-btn-file">
      <label>
        {" "}
        Profil Foto
        <div className="add-photo center">
   
            <PlusIcon />
            <p>Foto Hinzufügen</p>
            <input type="file" />
          
        </div>
      </label>
    </div>
  );
};

export default AddButtonIcon;
