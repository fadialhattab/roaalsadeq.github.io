let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
let togglebtn = document.querySelector('.toggle-btn');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


// Toggleeee 

const toggleBtn = document.querySelector('.toggle-btn');
const homepage = document.querySelector('.homepage');
const slider2 = document.querySelector('.slider');
txt = document.querySelector('.txt');
smallscreensmenu = document.querySelector('.smallscreensmenu');

// Add click event listener to toggle button
toggleBtn.addEventListener('click', () => {
  smallscreensmenu.classList.toggle('menutoggle'); // Toggle the .show class on the ul
  homepage.classList.toggle('show'); 
  slider2.classList.toggle('hide'); 
  txt.classList.toggle('hide'); 
});

// menu
// Get a reference to the menu bar element
const menuBar = document.querySelector('.menubar');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Check the scroll position
  if (window.scrollY > 0) {
    // When the user scrolls down, add a CSS class to change the background color
    menuBar.classList.add('scrolled');
  } else {
    // When the user scrolls back to the top, remove the CSS class to revert the background color
    menuBar.classList.remove('scrolled');
  }
});