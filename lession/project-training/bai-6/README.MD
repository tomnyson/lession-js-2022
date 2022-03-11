## array

```
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
const person = {firstName:"John", lastName:"Doe", age:46};

```

## function

```
cars.length // Returns the number of elements
cars.sort() // Sorts the array
Array.forEach()
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");

Popping and Pushing
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

const fruits = ["Banana", "Orange", "Apple", "Mango"];

-Hàm này có tác dụng xóa phần tử đầu tiên của mảng.

fruits.shift();

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
const fruits = ["Banana", "Orange", "Apple", "Mango"];

-Hàm này có tác dụng thêm một hoặc nhiều phần tử vào đầu mảng.

fruits.unshift("Lemon");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

```

### delete

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

### Splicing an Array

-Hàm này có tác dụng thêm phần tử vào mảng theo một vị trí xác định.
arr.splice(index, howmany, item1, ....., itemX)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
-Hàm này có tác dụng lấy ra một hoặc một số phần tử trong mảng.
arr.slice(begin,end);

### concat

```
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
```

## new array

```
const points = new Array();
const points = [];
const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
```

## sort

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
reverse
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
```

## sort numberic

```
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b})

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});

```

### join

```
Hàm join()
 valueOf(

arr.join(string);
```

### check index

```
array.indexOf(item, start)

Array.includes()
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true
find

Array.find()

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;

find Index

const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
})
```
