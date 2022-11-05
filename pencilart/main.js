
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// // active navbar commit
// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function () {
//     if(document.documentElement.scrollTop  > 20){
//         nav.classList.add("scroll-on");
//     }else{
//         nav.classList.remove("scroll-on");
//     }
// }

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 
// counter design
 document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 785, 786);
    counter("count2", 0, 200, 201);
    counter("count3", 0, 40, 41);
    counter("count4", 0, 410, 411);
 });
   
let inTxt = document.getElementById('inTxt');
let inBtn = document.getElementById('inBtn');
let response = document.getElementById('response');

inBtn.addEventListener("click",() => {

    let owner = "sunandha";
    let Owner = "Sunandha";
    let ownmsg = "Your the owner uh SO FREE"
    let base = 25;
    let high = 20;
    let numb = inTxt.value;
    let final = inTxt.value.length;
    let show = 1;
  

    if (numb===owner) {
      
      response.innerText = ownmsg;

    } else {

      if (numb===Owner) {

        response.innerText = ownmsg;

        
      } else {

        
      if (final < 5) {

        show = final*base;
   
         
     } else {
         
         show = final*high;
   
     }
   
     if (show >= 100) {
   
         response.innerText = `₹${show}+ Packaging`;
         
     } else {
   
         show = 100;
         response.innerText = `₹${show}+ Packaging`;
         
     }
    
     
        
      }
      
    }

    
});



