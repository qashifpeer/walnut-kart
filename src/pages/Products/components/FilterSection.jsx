import "./filterSection.css"
import { useFilterContext } from '../../../contexts/FilterContext';
import FormatPrice from "../../../helpers/FormatPrice";

const FilterSection = () => {
  const {
    updateFilterValue,
    filters: {text,categoryName,price,maxPrice, minPrice},
   all_products,
   
}= useFilterContext();
// console.log("🚀 ~ file: FilterSection.jsx:54 ~ FilterSection ~ maxPrice:", maxPrice)

  
const getUniqueData = (data,property)=>{
  let newVal = data.map((currElem)=>{
    return currElem[property];
    // return currElem.categoryName;
  });
  return (newVal = ["all", ...new Set(newVal)]);
  

}

  // Unique Data
  // const categoryOnlyData = getUniqueData(all_products);
  const categoryOnlyData = getUniqueData(all_products,"categoryName");
  return (
    <div>
    <div className='filter-search'>
      <form onSubmit={(e)=> e.preventDefault()}>
        <input type="text" name="text" value={text} onChange={updateFilterValue} placeholder='search' />
      </form>
    </div>
    <div className="filter-category">
      <h3>Category</h3>
      <div className='category-list'>
        {
          categoryOnlyData.map((currElem,index)=>{
            
            return <button key={index}
             type='button'
              name='categoryName'
              value={currElem}
              onClick={updateFilterValue}>{currElem}</button>
          })
        }
      </div>
      <div className="price-range">
        <h3>Price</h3>
        <p><FormatPrice price={price} /> </p>
        <input type="range" 
        min={minPrice}
         max={maxPrice}
         name="price"
          value={price} 
          onChange={updateFilterValue}/>
      </div>
    </div>
    </div>
  )
}
  
 

export default FilterSection