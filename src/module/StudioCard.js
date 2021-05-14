import "../css/module/StudioCard.css";

function StudioCard({
  img,
  name,
  location,
  desc,
  hashtag,
  user,
  meta,
  width,
  height,
}) {
  return (
    <div className="StudioCard">
      <div className="image_container">
        <img src={img} alt="studio image" />
      </div>

      <div className="studio-info">
        <div className="name-container">
          <h2 className="name">{name}</h2>
        </div>
        <div className="location-container">
          <h3 className="location">{location}</h3>
        </div>
        <div className="desc">{desc}</div>
        <div className="hashtag">{hashtag}</div>
        <div className="user-meta">
          <div className="user_container">
            <div className="user_profile"></div>
            <div className="user-info">
              <span className="username">{user.name}</span> <br />
              <span className="user_category">{user.category}</span>
            </div>
          </div>
          <div className="meta_container">
            <div className="like">
              <button type="button" className="like-btn meta-btn">
                <i class="far fa-heart fa-lg"></i>
              </button>
              {meta.like}
            </div>
            <div className="bookmark">
              <button type="button" className="bookmark-btn meta-btn">
                <i class="far fa-bookmark fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudioCard;
