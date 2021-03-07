function add(num1, num2, num3, num4){
  return num1 + num2 + num3 + num4;
}
console.log(add(38, 39, 24, 40));

/*Challenge: add a new candy to the inventory
We are getting new candies to sell, and we need to add them to our inventory array.

Create a function called addCandyToInventory that takes in

the inventory array
a new candy object
Add the new candy object to the end of the array.
Return the updated inventory array with the new candy object added to the end.

Note: Make sure you return the array from the function. Don't just change the array!

Example input and output
let newCandy = {
  candy: "Skittles",
  inStock: 200,
  weeklyAverage: 10,
};

addCandyToInventory(inventory, newCandy); /*->
[
  { candy: 'Twizzlers', inStock: 180, weeklyAverage: 200 },
  { candy: 'Sour Patch Kids', inStock: 90, weeklyAverage: 100 },
  { candy: 'Milk Duds', inStock: 300, weeklyAverage: 170 },
  { candy: 'Now and Laters', inStock: 150, weeklyAverage: 40 },
  { candy: 'Skittles', inStock: 200, weeklyAverage: 10 } // <— NEW CANDY
]
*/
Sample Inventory Array
This is a sample of the data that will be used in all of the challenges.

let inventory = [
  { candy: "Twizzlers", inStock: 180, weeklyAverage: 200 },
  { candy: "Sour Patch Kids", inStock: 90, weeklyAverage: 100 },
  { candy: "Milk Duds", inStock: 300, weeklyAverage: 170 },
  { candy: "Now and Laters", inStock: 150, weeklyAverage: 40 }
];
The tests might pass in different inventory arrays, but they'll have the same shape.

function addCandyToInventory(inventory, newCandy){
  let newCandy = {
    candy:"Skittles",
    inStock: 200,
    WeeklyAverage:10,};
    
   return inventory.push(newcandy.candy);


}


