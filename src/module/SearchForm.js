import "./SearchForm.css";

function SearchForm(props) {
  return (
    <div class="input-group">
      <input type="text" class="form-control search" value="" />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary btn_search"
          type="button"
          id=""
        >
          찾기
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
