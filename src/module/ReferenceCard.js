import "../css/module/ReferenceCard.css";

function ReferenceCard({ img, title, meta }) {
  return (
    <div className="ReferenceCard">
      <div className="image_container">
        <img src={img} alt="random magazine" />
      </div>

      <div className="info_container">
        <h2 className="title">{title}</h2>

        <div className="meta_container">
          <div className="like">
            <i className="fas fa-heart"></i>
            {meta.like}
          </div>
          <div className="view">
            <i className="fas fa-eye"></i>
            {meta.view}
          </div>
          <div className="bookmark">
            <i className="fas fa-bookmark"></i>
            {meta.bookmarked}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferenceCard;
