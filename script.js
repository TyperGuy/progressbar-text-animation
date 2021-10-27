const mainSection = document.querySelector("#section");
const progressBar =  document.querySelector("#progress-bar");

function moveProgress (){
  let scrollPosition = mainSection.getBoundingClientRect().top;
  console.log(scrollPosition.y);
  let proWidth = (scrollPosition/(mainSection.getBoundingClientRect().height
  -document.documentElement.clientHeight))*(-100);

  // let  value = Math.floor(proWidth);


  console.log()
}


window.addEventListener("scroll",moveProgress)