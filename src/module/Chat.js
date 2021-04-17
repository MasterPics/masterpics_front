import "../css/module/Chat.css";
import ProfileImage from "./ProfileImage";

function Chat({ author, type, content, profile_img, reverse, isHead }) {
  let contentJSX;
  if (type === "text") {
    contentJSX = <p>{content}</p>;
  } else if (type === "image") {
    contentJSX = <img src={content} />;
  }

  return (
    <div className={reverse ? "Chat reverse" : "Chat"}>
      <div className="img_container">
        {isHead ? <ProfileImage src={profile_img} radius={"40px"} /> : <></>}
      </div>

      <div className="name_content">
        {isHead ? <h5>{author}</h5> : <></>}
        <div className="content_container">{contentJSX}</div>
      </div>
    </div>
  );
}

export default Chat;
