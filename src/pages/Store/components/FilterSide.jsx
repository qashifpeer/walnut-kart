import React, { useState } from "react";
import "./FilterSide.css";

const FilterSide = () => {
    const [rangeValue, setRangeValue] = useState(3100);
  return (
    <div className="filter-container">
      <div className="filter-clear">
        <h3>Filters</h3>
        <p>Clear</p>
      </div>
      <div className="filter-price">
        <h3>Price</h3>
        <input
        type="range"
        list="tickmark"
        min="300"
        max="3100"
        step="200"
        value={rangeValue}
        
      />
      <datalist id="tickmark">
        <option value="300" label="300" />
        <option value="500" />
        <option value="700" />
        <option value="900" />
        <option value="1100" />
        <option value="1300" />
        <option value="1500" />
        <option value="1700" />
        <option value="1900" />
        <option value="2100" />
        <option value="2300" />
        <option value="2500" />
        <option value="2700" />
        <option value="2900" />
        <option value="3100" />
      </datalist>
      <p className=''>
        <span>300</span>
        <b>{rangeValue}</b>
      </p>
        
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <label htmlFor="dining">Dining</label>{" "}
        <input type="checkbox" id="dining" />
        <label htmlFor="office">Office</label>{" "}
        <input type="checkbox" id="office" />
        <label htmlFor="lounge">Lounge</label>{" "}
        <input type="checkbox" id="lounge" />
        <label htmlFor="bedroom">Bedroom</label>{" "}
        <input type="checkbox" id="bedroom" />
      </div>
      <div className="filter-sort-by">
        <h3>Sort By</h3>
        <div className="">
        <input name="filter-price" type="radio" id="low-to-high" />
        <label htmlFor="">Price-Low To High</label>
        </div>
        <div className="">
        <input name="filter-price" type="radio" id="high-to-low" />
        <label htmlFor="">High To Low</label>
        </div>
        
      </div>
    </div>
  );
};

export default FilterSide;
