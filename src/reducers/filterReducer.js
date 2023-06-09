const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((currElem)=>currElem.price)
     
      // find max element *** one way ***
      // console.log(Math.max.apply(null, priceArr))

      //2nd way
      // let maxPrice = priceArr.reduce((acc, curr)=> Math.max(acc, curr),0)

      //3rd way
      let maxPrice = Math.max(...priceArr)
      
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters :{...state.filters, maxPrice, price:maxPrice}
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORTING_ON_SELECT":
      // let userSelectedOption = document.getElementById("sort");
      // let selectedValue = userSelectedOption.options[userSelectedOption.selectedIndex].value;
      return {
        ...state,
        sortingOnSelect: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_products, sortingOnSelect } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sortingOnSelect === "lowest") {
          return a.price - b.price;
        }

        if (sortingOnSelect === "highest") {
          return b.price - a.price;
        }

        if (sortingOnSelect === "a-z") {
          return a.title.localeCompare(b.name);
        }

        if (sortingOnSelect === "z-a") {
          return b.title.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

      case "UPDATE_FILTER_VALUE" :
        const {name,value} = action.payload;
        return{
          ...state,
          filters :{ ...state.filters,[name]:value
          }
        };

        case "FILTER_PRODUCTS" :
          let {all_products} = state;
          let tempFilterProduct = [...all_products];
          const {text,categoryName, price} = state.filters;
          
          if(text){
            tempFilterProduct = tempFilterProduct.filter((currElem)=>{
              // return currElem.title.toLowerCase().includes(text);
              return currElem.title.toLowerCase().startsWith(text);

            })
          }

          if(categoryName !== "all"){
            tempFilterProduct = tempFilterProduct.filter((currElem)=>{
              return currElem.categoryName===categoryName;
            })
          }
            if( price=== 0){
              tempFilterProduct= tempFilterProduct.filter((currElem)=>currElem.price === price);

            }
          else{
            tempFilterProduct= tempFilterProduct.filter((currElem)=>currElem.price <= price

            );
          }
          return{
            ...state,
            filter_products :tempFilterProduct,
          };

          


    default:
      return state;
  }
};
export default filterReducer;
