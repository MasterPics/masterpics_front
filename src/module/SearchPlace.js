import "../css/module/SearchPlace.css";

function SearchPlace(props) {
  return (
    <div className="SearchPlace">
      <input
        type="text"
        className="form-control search"
        placeholder="찾는 장소를 검색해보세요."
      />

      <button className="btn btn-outline-secondary btn_search" type="button">
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchPlace;
