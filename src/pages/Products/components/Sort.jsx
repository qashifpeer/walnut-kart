import { useFilterContext } from "../../../contexts/FilterContext"
import "./sort.css"
import {BsFillGridFill, BsList} from "react-icons/bs"

const Sort = () => {
  const { grid_view, setGridView, setListView,sortingOnSelect} = useFilterContext();
  return (
    <div className='sort-section'>
      <div className="sort-list--grid">
        <button onClick={setGridView} className={ grid_view ? " active sort-btn" : "sort-btn"}><BsFillGridFill className="icon"/></button>
        <button onClick={setListView} className={ grid_view ? " sort-btn" : "active sort-btn"}><BsList className="icon" /></button>
      </div>
      <div className="product-data">Products Available</div>
      {/* 3rd column */}
      <div className="sort-selection">
        <form action="">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={sortingOnSelect}>
            <option value="lowest">Price(lowest)</option>
            
            <option value="highest">Price(highest)</option>
            
            <option value="a-z" name="a-z">Price(a-z)</option>
      
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Sort