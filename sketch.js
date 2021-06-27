function setup() {
  createCanvas(800,400);
  console.log(2);
  console.log("Hi");

  var name = "Sandeep Jha";
  console.log(name);
  console.log(name.length);
  console.log(name.toUpperCase());

  var num = 22;
  console.log(num);
  console.log(parseInt("20"));
  console.log(20%5);
  console.log(20+ "10");
  console.log("a" % "b");
  console.log(5/0);
  console.log(2===3);

  if(3>2){
    console.log("greater");
  }else{
    console.log("lesser");
  }

  var x = "Hi";

  switch(x){
    case "Hi":
      console.log("condition 1");
      break;
      case "HI":
        console.log("condition 2");
        break;
        default :
        console.log("none of the conditions are true");
        break;
  }

  for (var i = 0; i <= 5 ;i ++){
    console.log(i);
  }

  var y=0;
  while(y <= 5){
    console.log(y);
    y += 1;
  }

  var arr = [1,2,3,4];
 console.log(arr[2]);

  for(var i in arr){
    console.log(arr[i]);
  }

  console.log(arr.length);
  arr.push(5);
  console.log(arr);
  arr.pop();
  console.log(arr);

function Circumfernce(r){
  return 2*3.14*r;
}
var e = Circumfernce(20);
console.log(e);

 var paddle = new Object();
 paddle.length = 60;
 paddle.showLength = function(){
   console.log(paddle.length);
 }
 paddle.showLength();
console.log(paddle);


}

function draw() {
  background(255,255,255);  
  
}