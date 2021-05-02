import "../css/module/MagazineCard.css";

function MagazineCard({ img, title, user, meta, width, height }) {
  return (
    <div
      className="MagazineCard"
      style={{ width: width || 247, height: height || 337 }}
      draggable
    >
      <div className="image_container">
        <img src={img} />
      </div>

      <div className="info_container">
        <h2 className="title">{title}</h2>
        <div className="user_container">
          <span className="username">{user.name}</span>
          <div className="user_category">{user.category}</div>
        </div>
        <div className="meta_container">
          <div className="like">{meta.like}</div>
          <div className="view">{meta.view}</div>
          <div className="bookmark">{meta.bookmark}</div>
        </div>
      </div>
    </div>
  );
}

export default MagazineCard;
