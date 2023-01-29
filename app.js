/*
create a program that takes an array of strings and returns an array of the same strings in reverse order.Use a for loop to iterate over the array in reverse order and add each string to a new array.

*/
/*შექმენით პროგრამა, რომელიც იღებს სტრიქონების მასივს და აბრუნებს იმავე სტრიქონების მასივს საპირისპირო თანმიმდევრობით. გამოიყენეთ for loop, რათა გაიმეოროთ მასივი საპირისპირო თანმიმდევრობით და დაამატეთ თითოეული სტრიქონი ახალ მასივში.*/

const strings = ["chaser", "silvia", "ae86", "supra", "GTR", "sky"];

function tsaikitxeUkuRma(arr) {
  let ukuRmaArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    ukuRmaArray.push(arr[i]);
  }
  return ukuRmaArray;
}

console.log(tsaikitxeUkuRma(strings));
