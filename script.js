const mainSection = document.querySelector("#section");
const progressBar =  document.querySelector("#progress-bar");
const percent = document.getElementById("percent");


window.addEventListener("scroll",()=>{
  progressBar.style.width = `${(Math.floor((mainSection.getBoundingClientRect().top/(mainSection.getBoundingClientRect().height
  -document.documentElement.clientHeight))*(-100)))}%`;
  percent.innerText = progressBar.style.width;
})