// What are Conditions, If, If-else, if-else-if

// 1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the
// traffic light is red print the vehicles must stop.

let light="RED";
// let light="yellow";
// let light="green";
// let light="black"
if(light=="RED")
{
    console.log("vehical must stop");
}
else if(light=="yellow")
{
    console.log("vehical must wait, this single changing red or green")
}
else if(light=="green")
{
    console.log("vehical may proceed with caution")
}
else
{
    console.log("alert, traffic light are not working");
}