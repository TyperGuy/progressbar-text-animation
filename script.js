const mainSection = document.querySelector("#section");
const progressBar =  document.querySelector("#progress-bar");

function moveProgress (){
  let scrollPosition = mainSection.getBoundingClientRect().top;
  let proWidth = (scrollPosition/(mainSection.getBoundingClientRect().height
  -document.documentElement.clientHeight))*(-100);
    console.log(Math.floor(proWidth));

  // let  value = Math.floor(proWidth);
  progressBar.style.width = `${(Math.floor(proWidth))}%`;
  

}


window.addEventListener("scroll",moveProgress)