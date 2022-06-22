function a() {
  return new Promise(function (resolve, reject) {
    resolve('안녕')
  });

}
console.log(a());

// Promise : 약속 
// 실행을 일단 멈춘다.
// 호출 순서를 '사람이 작성한 것에 맡기는 것'

function a() {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){
      console.log(`지금 함수 A()가 실행되었습니다.`)
    //console.log(resolve('반가워'));
    resolve('반가워')
    },4000);
  });

}
//console.log(a());
//a();
a().then(function(data){
  //console.log(data);
  return new Promise(function(resolve,reject){
  setTimeout(function() {
    console.log('여기는 지금 then 이라는 함수 안에서 실행 된 것 입니다.1')
    resolve(data);
  }, 1000);
  });
});

a().then(function(data){
  //console.log(data);
  return new Promise(function(resolve,reject){
  setTimeout(function() {
    console.log('여기는 지금 then 이라는 함수 안에서 실행 된 것 입니다.2')
    resolve(data);
  }, 1000);
  });
});

a().then(function(data){
  //console.log(data);
  return new Promise(function(resolve,reject){
  setTimeout(function() {
    console.log('여기는 지금 then 이라는 함수 안에서 실행 된 것 입니다.3')
    resolve(data);
  }, 1000);
  });
});

a().then(function(data){
  //console.log(data);
  return new Promise(function(resolve,reject){
  setTimeout(function() {
    console.log('여기는 지금 then 이라는 함수 안에서 실행 된 것 입니다.4')
    resolve(data);
  }, 1000);
  });
});

a().then(function(data){
  //console.log(data);
  return new Promise(function(resolve,reject){
  setTimeout(function() {
    console.log('여기는 지금 then 이라는 함수 안에서 실행 된 것 입니다.5')
    resolve(data);
  }, 1000);
  });
});
// 실행을 일단 멈춘다. : spending : 대기한다. 


//Promise를 달면 순서를 지키기 시작한다. 
//- > 순서를 지키게 만들고 싶다면 Promise를 고려한다.
//- > 뒤죽박죽 움직이는 setInterval(), setTimeout()을 핸들링하기 편해진다.
// - > return 달고, new Promise() 달고, 콜백함수 달고, - > resolve

//then : 그러고 나서 ~
//promise(). then().then(). then().then(). then().then(). 
// 1. return 에 약속을 달면 순서를 지킨다. 
// 2. then()이 붙은 순서로 계속 순서를 지키게끔 만들 수 있다.
// 