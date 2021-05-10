import "../css/module/FilterList.css";
import { v4 as uuidv4 } from "uuid";

/**
 * Create selectable options for given filters.
 * @param {object[]} filters - List of selectable options.
 * - @param {string} filters[].name - Name of option.
 * - @param {boolean} filters[].default - If true, it's selected in default.
 * @param {boolean} many - If true, you can select multiple options.
 */

function FilterList({ filters, many }) {
  const filterArray = [];
  const name = uuidv4();

  filters.forEach((filter, index) => {
    const id = uuidv4();
    const JSX = (
      <div key={index} className="button_container">
        {many ? (
          filter.default ? (
            <input
              type="checkbox"
              name={name}
              id={id}
              key={uuidv4()}
              defaultChecked
            />
          ) : (
            <input type="checkbox" name={name} id={id} key={uuidv4()} />
          )
        ) : filter.default ? (
          <input
            type="radio"
            name={name}
            id={id}
            key={uuidv4()}
            defaultChecked
          />
        ) : (
          <input type="radio" name={name} id={id} key={uuidv4()} />
        )}
        <label htmlFor={id} key={uuidv4()}>
          {filter.name}
        </label>
      </div>
    );
    filterArray.push(JSX);
  });

  return <div className="FilterList">{filterArray}</div>;
}

export default FilterList;
