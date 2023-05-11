// 3. Write a program to demonstrate the results of comparison operators. Note that both the truth and false
// condition for each operator must be specified.

// answer

// Equal
let num1=10;
let num2=10;
console.log(num1==num2)  //true

let num3=10, num4=15;
console.log(num3==num4)  //false

// Not Equal
console.log(num1 != num2)  //false

console.log(num3 != num4)  //true

// Strictly Equal
console.log(num1===num2)  //true

let val1=10;
let val2="10"
console.log(val1===val2)  //false


// Strictly Not Equal
let n1=4,n2=4
console.log(n1 !== n2) //false

let num11=50,num12=55;
console.log(num11 !== num12) //true

// Greater Than
let num5=10, num6=15;
console.log(num6>num5)  //true

console.log(num5>num6)  //false

// Greater Than or Equal to

console.log(num6 >= num5) //true
console.log(num5 >= num6) //false

// Less Than
let num7=40, num8=45;
console.log(num7<num8) //true
console.log(num8<num7) //false

// Less Than or Eaual to
console.log(num7<=num8) //true
console.log(num8<=num7) //false
