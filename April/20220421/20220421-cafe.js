/*

* 커피원두 : 20000
*우유: 30000
*물:100
*설탕:3000
*시럽:3000
*시나몬:500
*빨대:1000
*머그컵 :300000
*플라스틱컵 :1000000
*얼음:200000




*/

const jearyoobj = {
  coffeewandoo : 20000,
  milk: 30000,
  water: 100,
  sugar: 3000,
  sirub: 200,
  cinamon: 500,
  mugcup: 300000,
  takeoutCup:100000,
  ice: 20000 
}
const americano = { 
  one : jearyoobj.coffeewandoo,
  two : jearyoobj.water,
  three: jearyoobj.takeoutCup
}
//console.log (jearyoobj);

//let americanoPrice = americano.one + americano.two +americano.three;
//if(americanoPrice> 1000000)
//console.log('아메리카노 값은${americanoPrice}원 입니다. 살텨?')
//else .log ('{${americanoPrice}원입니다. 사세요'});

//console.log (americanoPrice);

//console.log(americanoPrice+jearyoobj.ice);