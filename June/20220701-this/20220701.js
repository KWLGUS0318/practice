function one (element){
  element.addEventListener('click', function(){
    console.log(this)
  })
}
// this = element 
function two(element){
  element.addEventListener('click', ()=>{
    console.log(this)
  })
}
// this = two;


function three(element){
 let getvalue = element.map((element) => element)
}