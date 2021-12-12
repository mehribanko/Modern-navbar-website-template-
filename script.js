const menuBars=document.getElementById('menu-bars');
const overlay=document.getElementById('overlay');
const nav1=document.getElementById('nav-1');
const nav2=document.getElementById('nav-2');
const nav3=document.getElementById('nav-3');
const nav4=document.getElementById('nav-4');
const nav5=document.getElementById('nav-5');
navItems=[nav1, nav2, nav3, nav4, nav5];

function navAnimations(direction1, direction2){
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
    });

}

function toggleNav(){
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-change');
    if(overlay.classList.contains('overlay-change')){
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        navAnimations("out", "in");

    }else{
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navAnimations("in", "out");

    }

}

menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav)=>{
    nav.addEventListener('click', toggleNav);
});
