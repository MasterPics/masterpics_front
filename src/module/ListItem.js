import { Link } from "react-router-dom";
import "./ListItem.css";

function ListItem({ userProfile, itemContent }) {
  return (
    <div className="item_container">
      <div className="item_top contact-{{contact.pk}}">
        {/* <!-- 게시글 작성자 정보 --> */}
        <div>
          <Link to={`/profile/${userProfile.id}/`}>
            <div className="contact_owner">
              <div className="user_img">
                {userProfile.image ? (
                  <img
                    className="profile_image"
                    src={userProfile.image}
                    alt="profile_image"
                  />
                ) : (
                  <img
                    className="profile_image"
                    src="https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"
                    alt="profile_image"
                  />
                )}
              </div>
              <div>{userProfile.name}</div>
              <div className="user_category">{userProfile.category}</div>
            </div>
          </Link>
        </div>

        {/* <!-- 게시글 정보 --> */}
        <div className="title">
          <Link to={`detail/${itemContent.id}/`}>
            <div>{itemContent.title}</div>
          </Link>
        </div>

        {itemContent.sections.map((section, index) => {
          if (section.type === "image") {
            return (
              <img
                src={section.content}
                className="item_section__image"
                alt="item"
                key={index}
              />
            );
          } else if (section.type === "text") {
            return (
              <div className="item_section__text" key={index}>
                {section.content.split("\n").map((line) => {
                  return (
                    <span>
                      {line}
                      <br />
                    </span>
                  );
                })}
              </div>
            );
          } else if (section.type === "splitText") {
            return (
              <div className="item_section__split_text" key={index}>
                {section.content.map((column, index) => {
                  return (
                    <div className="split_text__column" key={index}>
                      {column.split("\n").map((line, index) => {
                        return (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </div>

      {/* <!-- comment, save --> */}
      <div className="item_bottom">
        <div className="comment">
          <Link to={`detail/${itemContent.id}/`}>
            <i className="far fa-comment-dots"></i>
            <span className="comment__content">{itemContent.commentCount}</span>
          </Link>
        </div>

        <div className="save save-{{contact.id}}">
          {itemContent.bookmarked ? (
            <i
              className="fas fa-bookmark"
              type="submit"
              name="type"
              value="save"
            ></i>
          ) : (
            <i
              className="far fa-bookmark"
              type="submit"
              name="type"
              value="save"
            ></i>
          )}
          <span className="save__content">{itemContent.bookmarkedCount}</span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
