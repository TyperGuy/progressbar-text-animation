const mainSection = document.querySelector("#section");
const progressBar =  document.querySelector("#progress-nar");

function moveProgress (){
  let scrollPosition = mainSection.getBoundingClientRect();
  console.log(scrollPosition);
  
}

window.addEventListener("scroll",moveProgress)