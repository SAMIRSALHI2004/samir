let sc=document.querySelector('header');
window.onscroll=function(){
    if(this.scrollY>50){
        sc.classList.add('active');
    }else{
        sc.classList.remove('active');
    }
}
let links=document.getElementById('links');
function openmenue(){
    links.classList.add('active');

}
function closemenue(){
    links.classList.remove('active')
}