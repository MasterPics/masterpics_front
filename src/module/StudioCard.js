import { matchPath } from "react-router";
import "../css/module/StudioCard.css";

function StudioCardTag({ tag }) {
  return <div className="StudioCardTag">{tag}</div>;
}

function StudioCard({ img, name, location, desc, tags, user, meta }) {
  return (
    <div className="StudioCard">
      <div className="image_wrapper">
        <img src={img} alt="studio" />
      </div>

      <div className="studio-info">
        <h2 className="name">{name}</h2>
        <h3 className="location">{location}</h3>
        <div className="desc">{desc}</div>
        <div className="tags">
          {tags.map((tag, index) => {
            return <StudioCardTag tag={tag} key={index} />;
          })}
        </div>
        <div className="user">
          <div className="user_container">
            <div className="user_profile"></div>
            <div className="user_info">
              <span className="username">{user.name}</span> <br />
              <span className="user_category">{user.category}</span>
            </div>
          </div>
          <div className="meta_container">
            <div className="like">
              <button type="button">
                {meta.liked ? (
                  <i class="fas fa-heart"></i>
                ) : (
                  <i class="far fa-heart"></i>
                )}
              </button>
              {meta.like}
            </div>
            <div className="bookmark">
              <button type="button">
                {meta.bookmarked ? (
                  <i class="fas fa-bookmark"></i>
                ) : (
                  <i class="far fa-bookmark"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudioCard;
