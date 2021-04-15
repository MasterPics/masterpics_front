import "../css/module/ProfileImage.css";

function ProfileImage({ src, radius }) {
  return (
    <img
      style={{ width: radius, height: radius }}
      className="ProfileImage"
      alt="profile"
      src={
        src ||
        "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"
      }
    />
  );
}

export default ProfileImage;
