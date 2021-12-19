const mainSection = document.querySelector("#section");
const progressBar =  document.querySelector("#progress-bar");
const percent = document.querySelector("#percent");


/* 
 "Step By Step Function"
function moveProgress (){

  let scrollPosition = mainSection.getBoundingClientRect().top;
  
  let proWidth = (scrollPosition/(mainSection.getBoundingClientRect().height
  -document.documentElement.clientHeight))*(-100);
    console.log(Math.floor(proWidth));

  progressBar.style.width = `${(Math.floor(proWidth))}%`;
  

}

*/



window.addEventListener("scroll",()=>{
  progressBar.style.width = `${(Math.floor((mainSection.getBoundingClientRect().top/(mainSection.getBoundingClientRect().height
  -document.documentElement.clientHeight))*(-100)))}%`;
  percent.innerText(progressBar.style.width+"%");
})