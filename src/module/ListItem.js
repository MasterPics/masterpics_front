import { Link } from "react-router-dom";
import "./ListItem.css";

function ListItem({ userProfile, itemContent }) {
  return (
    <div class="grid-item">
      <div class="item_top contact-{{contact.pk}}">
        {/* <!-- 게시글 작성자 정보 --> */}
        <div>
          <Link to={`/profile/${userProfile.id}/`}>
            <div class="contact_owner">
              <div class="user_img">
                {userProfile.image ? (
                  <img
                    class="profile_image"
                    src="{{contact.user.image.url}}"
                    alt="profile_image"
                  />
                ) : (
                  <img
                    class="profile_image"
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
        <div class="title">
          <Link to={`detail/${itemContent.id}/`}>
            <div>{itemContent.title}</div>
          </Link>
        </div>
        <div class="thumbnail_desc">
          <Link to={`detail/${itemContent.id}/`}>
            <img src={itemContent.thumbnailUrl} alt="" />
          </Link>
        </div>

        <div class="pay_date">
          {itemContent.pay == 0 ? (
            <div>Pay : 상호 무페이</div>
          ) : (
            <div>Pay : {itemContent.pay}원</div>
          )}
          {itemContent.is_closed ? (
            <div>마감</div>
          ) : (
            <div>
              <p>{itemContent.start_date}</p>
              <p>~{itemContent.end_date}</p>
            </div>
          )}
        </div>
      </div>

      {/* <!-- comment, save --> */}
      <div class="item_bottom">
        <div class="comment">
          <Link to={`detail/${itemContent.id}/`}>
            <i class="far fa-comment-dots"></i>
            <span class="comment__content">{itemContent.commentCount}</span>
          </Link>
        </div>

        <div class="save save-{{contact.id}}">
          {itemContent.bookmarked ? (
            <i
              class="fas fa-bookmark"
              type="submit"
              onclick="onClickSave({{ contact.id }})"
              name="type"
              value="save"
            ></i>
          ) : (
            <i
              class="far fa-bookmark"
              type="submit"
              onclick="onClickSave({{ contact.id }})"
              name="type"
              value="save"
            ></i>
          )}
          <span class="save__content">{itemContent.bookmarkedCount}</span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
