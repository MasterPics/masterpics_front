import "../css/module/SimpleCard.css";

function SimpleCard({ title, image, like, view }) {
  return (
    <div className="SimpleCard">
      <img alt="item card" src={image} />
      <div className="informations">
        <h4 className="title">{title}</h4>
        <div className="meta_info">
          <span className="like">{like}</span>
          <span className="view">{view}</span>
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;
