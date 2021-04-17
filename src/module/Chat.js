import "../css/module/Chat.css";
import ProfileImage from "./ProfileImage";

function Chat({ name, type, content, profile_img }) {
  let contentJSX;
  if (type === "text") {
    contentJSX = <p>{content}</p>;
  } else if (type === "image") {
    contentJSX = <img src={content} />;
  }

  return (
    <div className="Chat">
      <ProfileImage src={profile_img} radius={"30px"} />
      <div>
        <h5>{name}</h5>
        <div className="content_container">{contentJSX}</div>
      </div>
    </div>
  );
}

export default Chat;
