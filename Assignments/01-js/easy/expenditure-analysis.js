/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result=[];
  
  for(let i=0;i<transactions.length;i++){
    let transCat=transactions[i].category;
    let transPrice=transactions[i].price;
    //let index=checkCat(result,transCat);
    let index=result.findIndex(obj=> obj.category===transCat); // I think here obj acts like each element of result it is the argument of the arrow function
    // function is run for each element in the array with obj(array element as argument)
    if(index>-1){
      result[index].totalSpent+=transPrice;
    }else{
      let object={
        category:transCat,
        totalSpent:transPrice
      };
      result.push(object);
    }
  }
  return result;
}

function checkCat(arr,cat){
  for(let i=0;i<arr.length;i++){
    if(arr[i].category===cat){
      return i;
    }
  }
  return -1;
}

module.exports = calculateTotalSpentByCategory;
