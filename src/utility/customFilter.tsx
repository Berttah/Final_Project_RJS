import { inventory } from "../inventory";

function customFilter(filter){
  let result = inventory.filter(function(obj){
      return filter.reduce(function(a, f){
          return a && (obj[f.key] === f.value);
      }, true);
  })
  return result;
}

// var filtered = Object.keys(dict).reduce(function (filtered, key) {
//   if (dict[key] > 1) filtered[key] = dict[key];
//   return filtered;
// }, {});


// function customFilter(category, filter) {
//   let result;
  
//   if (filter == '') {
//     // returns all items in the category
//     result = inventory.filter( item => item['categoryId'] == category)
//   } else if (filter == 'highlighted') {
//     // returns all items highlighted in the category
//     result = inventory.filter( item => item['categoryId'] == category && item.highlighted == true )
//   } else if (filter == 'mostSold') {
//     // returns the most sold item in the category
//     result = inventory.filter( item => item['categoryId'] == category && item.mostSold == true )
//   } else if (filter == 'notMostSold') {
//     // returns all items that are not the most sold in the category
//     result = inventory.filter( item => item['categoryId'] == category && item.mostSold == false )
//   } 
  
//   return result
// }


export default customFilter