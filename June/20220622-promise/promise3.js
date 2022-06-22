let jihyeon = 100;

// work .1 1초 뒤에 1번 행동에는 jihyeon가 10아 덧셈되고 콘솔에 출력된다. =110
// work . 2 1초 뒤에 2번 행동에는 jihyeon를 30을 빼고 콘솔에 출력된다. = 80
//todo : 총 2초간 두번의 계산을 진행시킨다.

function first() {
  return new Promise(function (resolve, reject) {
    setTimeout(function(resolve,reject) {
      
      jihyeon =jihyeon+10
      console.log(jihyeon);
      resolve();
    }  ,1000)
  });


}

first()
  .then(function(data){
    return new Promise(function(resolve, reject) {

      setTimeout(function(){
      jihyeon = ji -30;
      console.log(jihyeon);
      resolve();
  },1000);
  });
});

// 내가 순서를 많이 써야 하는 상황에서 떠올릴 키워드는 
//"약속"
//promise
//대기 : pending
//성공 : fulfilled (resolve)
//실패 : reject (reject)

//비동기 방식 : 벙렬 처리 : 동시에 할래 
//동기 방식 : 직렬 처리 : 순서대로 할래 



// node .js / 논블록킹 방식의 I/O input/ output
// 논블록킹 "비동기 방식 "
//node.js / 입력 출력이 끝내줌 : 순서를 어기고 먼저 끝나는대로 처리해주는 방식 

