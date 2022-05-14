const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let iw = 0
while (iw < ingredients.length) {
  console.log(ingredients[iw]);
  iw++;
}



// Write a for loop that prints out the contents of ingredients:

for (let il = 0; il < ingredients.length; il++) {
  console.log(ingredients[il]);

} 

// Write any loop (while or for) that prints out the contents of ingredients backwards:

let array = ingredients.reverse();
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}