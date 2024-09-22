const btn = document.querySelector("#menu-btn");
btn.addEventListener("click", navToggle);//Here you will put the event that you want to listen which is "click" and function to run, but here we will put "named function" and and we created that function down here.

//^Creating a variable for the actual menu
const menu = document.querySelector('#menu');

function navToggle(){
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}