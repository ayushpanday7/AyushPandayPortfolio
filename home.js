
document.querySelector(".hamburger").addEventListener("click",()=>{
  var sidebar = document.querySelector(".sidebar").classList;
  sidebar.toggle("hidesidebar");
  if(sidebar.contains("hidesidebar"))
  {
    document.querySelector(".hide").style = "display:none";
    setTimeout(() => {
      document.querySelector(".show").style = "display:flex;";
    }, 900);  
  }
  else{
    document.querySelector(".show").style = "display:none";
    setTimeout(() => {
      document.querySelector(".hide").style = "display:flex;";
    }, 1000);  
  }
})
