let accordionBtn = document.querySelectorAll('.accordionTitle');
let allTexts = document.querySelectorAll('text');
let accIcon = document.querySelectorAll('.accIcon');



accordionBtn.forEach(function(el){
  //for each 가 뭐지 el 이라는 기능을 추가?
  el.addEventListener('click', toggleAccordion)
  // el 에 클릭했을 때 toggleaccodian 아 뭐지?

})
//토글 아코디언의 기능, el 을 넣었다. 
function toggleAccordion(el){
  let targetText = el.currentTarget.nextElementSivling.classList;
  let targetAccIcon
}