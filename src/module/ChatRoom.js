import "../css/module/ChatRoom.css";
import ProfileImage from "../module/ProfileImage";
import Chat from "../module/Chat";

function ChatRoom({ participant, chats, user }) {
  let prevAuthorId = null;

  return (
    <div className="ChatRoom">
      <header>
        <div className="left_container">
          <ProfileImage src={participant.profile_img} radius={"60px"} />
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
          const reverse = chat.authorId === user.id;

          const isHead = chat.authorId !== prevAuthorId;
          prevAuthorId = chat.authorId;

          return (
            <div className="chat_container">
              <Chat {...chat} key={index} reverse={reverse} isHead={isHead} />
            </div>
          );
        })}
      </div>

      <form className="input_container">
        <button type="button">
          <i class="fas fa-plus"></i>
        </button>
        <input type="text" />
        <button type="send"></button>
      </form>
    </div>
  );
}

export default ChatRoom;
