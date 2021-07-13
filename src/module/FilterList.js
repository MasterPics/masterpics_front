import "../css/module/FilterList.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

/**
 * Create selectable options for given filters.
 * @param {object[]} filters - List of selectable options.
 * - @param {string} filters[].name - Name of option.
 * - @param {boolean} filters[].default - If true, it's selected in default.
 * @param {boolean} many - If true, you can select multiple options.
 */


function FilterList({ filters, many }) {
  const [selectedFilter, setSelectedFilter] = useState(0);
	const [subCategory, setSubCategory] = useState([]);
	
	const filterArray = [];
	
	useEffect(()=>{
		filters.forEach((filter, index)=>{
			if(filter.default) {
				setSelectedFilter(index);
				console.log(selectedFilter);
			}
		})
	}, []);
	
	useEffect(()=>{
		const name = uuidv4();
		const newSubCategory = [];
		filters[selectedFilter].subCategory.forEach((category, index)=>{
			const JSX = (
				<div className="sub_category">
					<input 
						type="radio" 
						key={`${category.name}${index}`} 
						name={name} 
						id={`${category.name}${index}`} 
						defaultChecked={category.default} />
					<label 
						htmlFor={`${category.name}${index}`} 
						key={`${category.name}_${index}`} >
						{category.name}
					</label>
				</div>
			)
			
			newSubCategory.push(JSX);
	})
		setSubCategory(newSubCategory);
		console.log(subCategory);
	}, [selectedFilter]);
	
	
	const onClickFilter = (index, e)=>{
		setSelectedFilter(index);
		console.log(selectedFilter);
		console.dir(e.target.previousElementSibling.checked);
	}

	const name = uuidv4();
  filters.forEach((filter, index) => {
		const type = many ? "checkbox" : "radio";
    const JSX = (
      <div key={index} className="button_container">
        <input
          type={type}
          name={name}
          id={filter.name + index}
          key={`${filter.name}${index}`}
          defaultChecked={filter.default}
        />
        <label htmlFor={filter.name + index} key={`${filter.name}_${index}`} onClick={(e)=>{onClickFilter(index, e)}} >
          {filter.name}
        </label>
      </div>
    );
    filterArray.push(JSX);
  });
	
	
	
	

  return <div className="FilterList">
		<div className="filter_container">
	  	{filterArray}
		</div>
		<div className="sub_category_container">
			{subCategory}
		</div>
  </div>;
}

export default FilterList;
