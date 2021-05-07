import "../../css/router/place/PlaceMain.css";
import { Link } from "react-router-dom";
import SearchPlace from "../../module/SearchPlace";
import LabelCheckbox from "../../module/LabelCheckbox";
import ClickDropdown from "../../module/ClickDropdown";

function PlaceMain() {
    return (
        <div className="PlaceMain">
            <div className="container">
                <div className="content_wrapper">
                    <h1 className="title">Place</h1>
                    <div className="desc">
                        키워드 검색을 통해 나의 시안과 예산에 맞는 촬영 공간을 찾아보고, <br />
                        내가 아는 촬영 장소들을 사람들과 공유해보세요!
                    </div>
                    <Link className="link" to="">장소 등록하러 가기</Link>
                </div>
            </div>
            <div className="filter">
                <SearchPlace />
                <div className="checkbox">
                    <LabelCheckbox />
                    <div className="location">
                        <label htmlFor="is-near">내 주변 위치</label>
                        <input type="checkbox" className="is-near" name="is-near" value="is-near" />
                    </div>
                    <ClickDropdown />  
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}

export default PlaceMain;

