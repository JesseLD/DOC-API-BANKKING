const endpoints = document.querySelectorAll(".endpoint-base");

endpoints.forEach((endpoint)=>{
  endpoint.addEventListener("click",()=>{
    const DYNcontents = endpoint.querySelector(".dynamic-content");
    DYNcontents.classList.toggle("on-hide") 
  })
  
});