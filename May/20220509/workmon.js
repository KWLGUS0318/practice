let a = 1;
let b = 1;
let c = 2;

function valuTest(){
if (typeof a === "number"){
console.log("변수 a는 데이터타입이 숫자.");

}
else {
  console.log("변수 a는 숫자타입 아님");
}
}

function valuTest(){
  if(typeof a === "number" && typeof b === "string"){
    console.log("변수 a와 b는 모두 넘버입니다.")
  }else{
    console.log(" 다모르겠는데 , 둘중 하나 이거나 둘다 넘버아닐 수 있습니다.")
  }
}

// if / else 중에 하낙 메인 알고리즘인 경우가 많다. 
function ValuTestTwo(){
  if(typeof a === "string"){
    console.log('a= string')

    //a 문자열임
  }else{
    if(typeof a === "number"){
      console.log('a=number')

    //a 숫자임

      if(a ===1){
        console.log("a=1");
      }

    //a 1임

      else{
        console.log("a는 1 아님")
    //a 1 아님

      }
    }
      else{
        console.log("a는 number 아님")
      }
    //a 넘버 아님 

    }
  }
