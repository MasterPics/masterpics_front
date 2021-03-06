import "../css/module/ProfileCard.css";
import ProfileImage from "../module/ProfileImage";

function ProfileCard({ user }) {
  const {
    username,
    email,
    desc,
    category,
    profile_img,
    phone,
    instagram,
    portfolio_count,
    contact_count,
  } = user;
  return (
    <div className="ProfileCard">
      <div className="img_name_category">
        <ProfileImage src={profile_img} radius={"100px"} />
        <div className="username">{username}</div>
        <div className="category">{category}</div>
      </div>

      <div className="user_contact">
        <div>
          <span>E-mail</span>
          <span>{email}</span>
        </div>
        <div>
          <span>Phone</span>
          <span>{phone}</span>
        </div>
        <div>
          <span>Instagram</span>
          <span>{instagram}</span>
        </div>
      </div>

      <button>메시지 보내기</button>

      <div className="posts">
        <div>
          <span>포트폴리오</span>
          <span>{portfolio_count}</span>
        </div>
        <div>
          <span>컨택트</span>
          <span>{contact_count}</span>
        </div>
      </div>

      <div className="description">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
