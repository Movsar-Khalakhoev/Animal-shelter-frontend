import React from "react"
import {updateFilterCreator} from "../../../../../../../../../../redux/filterReducer";
import Category from "./Category";

const CategoryContainer = (props) => {
  return <Category
    updateFilter={(filter, toggle) =>
    props.dispatch(updateFilterCreator(filter, toggle))}
    property_value={props.property_value}
    category={props.category}
    categoryIndex={props.index}
    propertyIndex={props.propertyIndex}
  />
}

export default CategoryContainer