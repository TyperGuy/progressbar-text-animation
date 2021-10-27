const mainSection = document.getElementById("section");
const progressBar =  document.getElementById("progress-bar");

function moveProgress (){
  let scrollPosition = mainSection.getBoundingClientRect().top;
  //console.log(scrollPosition.y);
  let proWidth = (scrollPosition/(mainSection.getBoundingClientRect().height
  -document.documentElement.clientHeight))*(-100);

  // let  value = Math.floor(proWidth);
  progressBar.style.width = Math.floor(proWidth) + "%";

  console.log()
}

window.addEventListener("scroll",moveProgress)