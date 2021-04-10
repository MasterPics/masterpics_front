import { Link } from "react-router-dom";
import "../css/module/ListItem.css";

function ListItem({ userProfile, itemContent, foot_information }) {
  const {
    commentCount,
    bookmarkedCount,
    bookmarked,
    viewCount,
    likeCount,
    liked,
  } = foot_information ? foot_information : {};

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

      {/* <!-- foot_information --> */}
      <div className="foot_information">
        <div className="foot_information__left">
          {commentCount !== undefined ? (
            <div className="comment">
              <Link to={`detail/${itemContent.id}/`}>
                <i className="far fa-comment-dots"></i>
                <span className="comment__content">{commentCount}</span>
              </Link>
            </div>
          ) : (
            <></>
          )}

          {likeCount !== undefined ? (
            <div className="like">
              {liked ? (
                <i
                  className="fas fa-heart"
                  type="submit"
                  name="type"
                  value="like"
                ></i>
              ) : (
                <i
                  className="far fa-heart"
                  type="submit"
                  name="type"
                  value="like"
                ></i>
              )}
              <span className="like__content">{likeCount}</span>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="foot_information__right">
          {viewCount !== undefined ? (
            <div className="eye">
              <i className="far fa-eye"></i>
              <span className="view__content">{viewCount}</span>
            </div>
          ) : (
            <></>
          )}

          <div className="save save-{{contact.id}}">
            {bookmarked ? (
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
            <span className="save__content">{bookmarkedCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
