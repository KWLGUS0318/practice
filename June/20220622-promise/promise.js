// 1. 동작(모션)을 제어할 때 사용 
// 2. event -driven : 이벤트 주도 방식 
// - > 이벤트가 일어났을 때 무언가 열심히 한다. 
//---------------------------------
// 3. 눈에 안보임 : 들여다 보는 일련의 과정이 필요 


// 1. 함수는 최상급 취급을 받기 때문에 언제든지 콜링이 가능하다. 
// 


function text(){
  return `<div>hello</div>`;
}

//console.log(typeof text());

function section(){
  return `<section>bye</section>`
}
//console.log(text());
//console.log(section());

let timerA = setTimeout(() => {
  console.log(text());
  let timerB = setTimeout(() => {
    console.log(section());
    
  },0);
  
},1000);


// 2. 순서를 어기는 setTimeout() - > 먼저 완료된 것부터 바로 실행 : 위아래가 없음 : 비동기 함수 
// 순서를 조심해야됨 

// 함수안에 함수를 넣어서 해결 - > 콜백지옥 


