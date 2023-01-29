//forEach + function 
let nums = document.querySelectorAll(".row .num");
let section = document.querySelector(".row");
let started = false; //function started  ? no 

// nums.forEach((num)=> startCount(num));
// عاوزه يشتغل عند الاسكورل
window.onscroll = function ()
{
    if(window.scrollY >=  200){
        // nums.forEach((num)=> startCount(num));
        if(!started) // هل == فولص 
        {
        nums.forEach((num)=> startCount(num));

        }
        started = true;
    span.classList.add("show");


    }
    else{
        span.classList.remove("show");
    }
}
function startCount(el)
{
    let goal = el.dataset.goal; 
    let counter = setInterval(()=> {
      el.textContent++;
      if(el.textContent == goal)
      {
        clearInterval(counter);
      }
    }, 2000 /goal);
}
// startCount(document.querySelectorAll (".row .num") [0]) ; 
////////////////// up//////////////
let span = document.querySelector(".up");
span.onclick = function() {
    window.scrollTo({
        top:0,
        behavior :"smooth",
    });
}

// window.onscroll = function(){
// if(this.scrollY >= 150)
// {
//     span.classList.add("show");
//     console.log("d");
// }
// else
// {
//     span.classList.remove("show");

// }
    
   
//     // this.screenY >= 100 ? span.classList.add("show") :span.classList.remove("show")  ; 
// };
const hamburger = document.querySelector(".hamburger");
const navMenue = document.querySelector(".nav-menu");
hamburger.addEventListener("click" , () =>{
    hamburger.classList.toggle("active");
    navMenue.classList.toggle("active");
})
document.querySelectorAll(".nalv-link").forEach(n=>n.addEventListener("click" ,() =>{
    hamburger.classList.toggle("active");
    navMenue.classList.toggle("active");
}))
//////dark moood 
// const toggle = document.getElementById('toggle-dark');
// const body = document.querySelector("body");
// toggle.addEventListener('click' , function(){
//     this.classList.toggle('bi-moon');
//     if(this.classList.toggle('bi-brightness-high')){
//         body.style.background='white';
//         body.style.color='black';
//         body.style.transition='2s';
    
//     }
//     else{
//         body.style.background='black';
//         body.style.color='white';
//         body.style.transition='2s'; 
//     }
// })
var icon =document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme"))
    {
        icon.src ="images/sun.png";
    }
    else{
        icon.src ="images/moon.png";


    }
}