import "../../css/router/profile/ProfileMain.css";

function ProfileMain({ user }) {
  user = {
    is_valid: true,
    username: "Nagi",
    email: "demon0315@naver.com",
    category: "other use",
    desc:
      "Nunc at erat viverra, consequat est ullamcorper, luctus mauris. Suspendisse commodo tortor ut lectus porta aliquam. Sed eu posuere purus. Mauris in tortor vehicula, consectetur neque quis, pharetra diam. Nullam luctus sapien risus, vitae posuere turpis venenatis a. Quisque ex magna, convallis ac congue sed, commodo sed purus. Integer euismod, ligula eget volutpat hendrerit, risus tortor eleifend tortor, in commodo augue magna cursus neque. Vestibulum congue massa lacus, sit amet aliquam metus facilisis aliquet.",
  };

  return (
    <div className="ProfileMain">
      <div className="profile_container">
        <img
          className="profile_image"
          src={
            user.image ||
            "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"
          }
          alt="profile_image"
          width="20%"
        />
        <div className="profile_info_container">
          <ul>
            <li>
              <div className="profile_username">
                <div className="profile_info">username</div>
                <div className="profile_info_username">{user.username}</div>
              </div>
            </li>
            <li>
              <div className="profile_email">
                <div className="profile_info">email</div>
                {user.email ? (
                  <div className="profile_info_email">
                    이메일 정보가 없습니다.
                  </div>
                ) : (
                  <div className="profile_info_email">{user.email}</div>
                )}
              </div>
            </li>
            <li>
              <div className="profile_category">
                <div className="profile_info">category</div>
                <div className="profile_info_category">{user.category}</div>
              </div>
            </li>
            <li>
              <div className="profile_desc">
                <div className="profile_info">프로필 소개</div>
                <div className="profile_info_desc">{user.desc}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {user.is_valid ? (
        <div className="profile_button">
          <a
            className="edit_btn"
            href="{% url 'profile:profile_update' user.pk %}"
          >
            프로필 수정
          </a>
          <a
            className="edit_btn"
            href="{% url 'profile:profile_update_password' user.pk %}"
          >
            비밀번호 변경
          </a>
          <a
            className="delete_btn"
            href="{% url 'profile:profile_delete' user.pk %}"
          >
            탈퇴
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProfileMain;
