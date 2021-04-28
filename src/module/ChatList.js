import "../css/module/ChatList.css";
import ProfileImage from "../module/ProfileImage";

function ChatList({ chatList }) {
  return (
    <div className="ChatList">
      <div className="title">
        <h2>WebChat</h2>
        <span>채팅을 통해 컨택할 아티스트와 협의를 진행하세요.</span>
      </div>

      <div className="search_container">
        <input type="text" placeholder="채팅방 검색" />
        <button></button>
      </div>

      <ul className="chat_list">
        {chatList.map((chat, index) => {
          const {
            name,
            profile_img,
            last_timestamp,
            unread_message,
            preview_message,
          } = chat;

          return (
            <li key={index}>
              <ProfileImage src={profile_img} radius={"60px"} />
              <div className="text_container">
                <h5>{name}</h5>
                <span>{preview_message}</span>
              </div>
              <div className="right_container">
                <span className="timestamp">{last_timestamp}</span>
                {unread_message ? (
                  <span className="unread_message">{unread_message}</span>
                ) : (
                  <></>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ChatList;
