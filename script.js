const mainSection = document.querySelector("#section");
const progressBar =  document.querySelector("#progress-bar");

function moveProgress (){
  let scrollPosition = mainSection.getBoundingClientRect();
  console.log(-scrollPosition.y);
  let proWidth = (scrollPosition/(mainSection.getBoundingClientRect().height
  -document.documentElement.clientHeight))*100;

  progressBar.style.width = Math.floor(proWidth) + "%";

  console.log(proWidth)
}

window.addEventListener("scroll",moveProgress)