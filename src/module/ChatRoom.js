import "../css/module/ChatRoom.css";
import ProfileImage from "../module/ProfileImage";
import Chat from "../module/Chat";

function ChatRoom({ participant, chats }) {
  return (
    <div className="ChatRoom">
      <header>
        <div className="left_container">
          <ProfileImage src={participant.profile_img} radius={"40px"} />
          <div>
            <h5>{participant.name}</h5>
            <div></div>
          </div>
        </div>

        <div className="right_container">
          <div className="button_container">
            <button></button>
            <span>파일</span>
          </div>
          <div className="button_container">
            <button></button>
            <span>나가기</span>
          </div>
        </div>
      </header>

      <div className="chattings">
        {chats.map((chat, index) => {
          return <Chat {...chat} key={index} />;
        })}
      </div>

      <div className="input_container">
        <form>
          <button></button>
          <input type="text" />
          <button type="send"></button>
        </form>
      </div>
    </div>
  );
}

export default ChatRoom;
