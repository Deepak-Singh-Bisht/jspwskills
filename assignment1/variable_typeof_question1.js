/*Variables and typeof
1. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of
value stored.*/

// Answer:
//1. String
let var1 = ("I am happy to join PWSKILLS FSWD course");
console.log("String", typeof var1);

//2. Number
     
  //(i) Integer   
      let var2 = 1041
      console.log("Integer", typeof(var2))
  
  //(ii) Floating 
      let var3 =55.45
      console.log("Floating", typeof var3)

  //(iii) Infinity 
      let var4= Number.POSITIVE_INFINITY
      console.log("Infinity", typeof var4)
  //(iv) Not a Number
       let var5=NaN
       console.log("Not a Number",typeof var5)
  
//3. BigInt
      let var6=1024n
      console.log(typeof var6)

//4. Null
      let var7=null
      console.log(typeof var7)

//5. Boolean
      let var8=true
      console.log(typeof var8)

//6.Undefined
      let var9=undefined
      console.log(typeof var9)

//7.symbol
     let var10=Symbol("PW Skills")
     console.log(typeof(var10))
    
//8.Objects
     
    //(i) Array
    let var11=["1","3","5","8"]
    console.log("array",typeof var11)


    //(ii) Object
    let var12={name:"PW Skills",coure:"FSWD",}
    console.log(typeof var12)
