const mainSection = document.querySelector("#section");
const progressBar =  document.querySelector("#progress-nar");

function movProgress (){
  let scrollPosition = mainSection.getBoundingClientRect();
  console.log(scrollPosition);
}