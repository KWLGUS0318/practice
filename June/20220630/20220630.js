function one(){
  return "메롱";
}
console.log(one()=== "메롱");

// 실행부와 return 만 다루면 된다.

//숫자 1일 밷어내는 함수 

// function test(){
//  return "1"
// }
// console.log(test)

//function one() {
//
//
//
//  console.log('야호');
//
//
//  return "메롱";
//}
//console.log(one() === "메롱");
//
//function test() {
//  return "2"
//}
//console.log(test())


//function one(ipgoo){
//  return "천재";
//
//}
//console.log(one('바보'))
// 분변성


function one(ipgoo){
  if( ipgoo=== '바보'){
  return "나 바보 아닌데?";}
  else{
    return "천재"
  }
}
 console.log(one('바보'))

 //함수를 쓰면 "내가 편해진다."

// 컴퓨터에 맡기는 일이 우리일

// 판단만 잘 시키면 된다.
// 불편하지만 일일히 판단시켜주는 작업 = 본업 


//function one(ipgoo, ipgootoo, count) {
//  let strings = `${ipgoo,ipgootoo}`;
//  for (let i = 0; i < count; i++) {
//    console.log(strings);
//  }
//  return "메롱";
//}
//one('<div>','</div>', 5)


function stringCombine(a,b){
  return a + b;
}
function consoleLoop(string,count){
  for (let i = 0; i < count; i++) {
    console.log(string);
}

function one(ipgoo, ipgootoo, count) {
  let strings = stringCombine(ipgoo,ipgootoo)
  consoleLoop(strings,count)
  }
  return "메롱";
}
one('<div>','</div>', 5)
