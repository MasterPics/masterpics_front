import "../../css/router/profile/ProfileEdit.css";
import ProfileImage from "../../module/ProfileImage";

const onImageChange = (event) => {
  const input = event.target;
  const reader = new FileReader();

  reader.onload = (readerEvent) => {
    console.dir(input.parentElement.firstElementChild);
    input.parentElement.firstElementChild.src = readerEvent.target.result;
  };

  const imageFile = input.files[0];
  reader.readAsDataURL(imageFile);
};

function ProfileEdit({ user }) {
  const {
    username,
    email,
    desc,
    category,
    profile_img,
    phone,
    instagram,
  } = user;
  return (
    <form className="ProfileEdit" method="post">
      <div className="img_name_category">
        <div className="img_container">
          <ProfileImage src={profile_img} radius={150} />
          <label htmlFor="profile_img">프로필 사진 수정</label>
          <input
            name="profile_img"
            id="profile_img"
            type="file"
            accept="image/png, image/jpeg"
            onChange={onImageChange}
          />
        </div>

        <div className="name_category_container">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            defaultValue={username}
          />
          <label htmlFor="category">Category</label>
          <input
            name="category"
            id="category"
            type="text"
            defaultValue={category}
          />
        </div>
      </div>

      <div className="user_contact">
        <span>기본 정보</span>

        <div className="input_container">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="text" defaultValue={email} />

          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="text" defaultValue={phone} />

          <label htmlFor="instagram">Instagram</label>
          <input
            id="instagram"
            name="instagram"
            type="text"
            defaultValue={instagram}
          />
        </div>
      </div>

      <div className="description">
        <span>프로필 소개</span>
        <textarea defaultValue={desc}></textarea>
      </div>

      <button type="submit">프로필 변경</button>
    </form>
  );
}

export default ProfileEdit;
