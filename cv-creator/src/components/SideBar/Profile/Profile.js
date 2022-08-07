import { useState } from "react";
import ProfileEdit from "./ProfileEdit";
const Profile = () => {
  const [urlData, setURL] = useState("");
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const onSaveURLHandler = (enteredURL) => {
    setURL(enteredURL);
  };

  return (
    <div
      className={
        hovered ? "image-container editInactive" : "image-container editActive"
      }
      onMouseEnter={toggleHover}
    >
      <div className="background-image edit-container">
        <img
          src={
            urlData
              ? urlData
              : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          }
          alt=""
          className="image"
        />
        <ProfileEdit saveURLData={onSaveURLHandler} toggleHover={toggleHover} />
      </div>
    </div>
  );
};

export default Profile;
