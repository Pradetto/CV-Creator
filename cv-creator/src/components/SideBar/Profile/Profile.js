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
        !hovered
          ? "image-container sidebar-subcontent editInactive"
          : "image-container sidebar-subcontent editActive"
      }
      onMouseEnter={toggleHover}
    >
      <div className="background-image">
        <img
          src={
            urlData
              ? urlData
              : "https://media-exp1.licdn.com/dms/image/C4E03AQEv0VMJNzSOSA/profile-displayphoto-shrink_200_200/0/1643136677369?e=1665619200&v=beta&t=j51LUOKtpvC0sdo0GQwdDRQFKmIvIMCbctyv7I5ld50"
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
