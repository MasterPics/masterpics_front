import "../css/module/StudioContainer.css";

function StudioContainer({img ,name, location, desc, hashtag, meta}) {
    return (
        <div className="studio-container">
            <div className="studio-img">
                {img}
            </div>
            <div className="studio-info">
                <h2 className="name">{name}</h2>
                <h3 className="location">{location}</h3>
                <div className="desc">{desc}</div>
                <div className="hashtag">{hashtag}</div>
                <div className="meta_container">
                    <div className="user">
                        <div className="user_profile"></div>
                        <span className="username">{user.name}</span>
                        <span className="user_category">{user.category}</span>
                    </div>
                    <div className="like">
                        <i class="fas fa-heart"></i>
                        {meta.like}
                    </div>
                    <div className="bookmark">
                        <i class="fas fa-bookmark"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudioInfo;