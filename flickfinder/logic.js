
const slides= document.querySelectorAll(".slides img");
let ind = 0;
let int = null;
console.log(document.body.childNodes);

const slides1= document.querySelectorAll(".img");
let ind1 = 0;
let int1 = null;

window.addEventListener("load", async ()=>{
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=68e3c51d";
    const response = await fetch(url);
    data = await response.json();
    const ele = document.querySelector(".card");
    ele.childNodes[1].src = data.Poster;
    ele.childNodes[3].childNodes[1].textContent+= data.Title;
    ele.childNodes[3].childNodes[3].textContent+= data.Type;
    ele.childNodes[3].childNodes[5].textContent+= data.Year;
}
)
const items = document.querySelectorAll(".accordion-item");
items.forEach( item =>{
    item.querySelector(".accordion-title").addEventListener("click", ()=>{
        items.forEach(i=>{
            if(i != item){
            i.classList.remove('active');
            i.querySelector('.icon').textContent = "⊕";
        }
    });
    // item.classList.add('active');
    // item.querySelector('.icon').textContent = "⊗";
    const isActive = item.classList.contains('active');
    item.classList.toggle('active');
    item.querySelector('.icon').textContent = isActive ? '⊕' : '⊗';
    });
});
initialize();
initialize1();
//
function initialize(){
    if(slides.length>0){
        slides[ind].classList.add("displaySlide");
        int = setInterval(nextSlide, 5000);
    }
}
function nextSlide(){
    ind++;
    showSlide(ind);
}
function prevSlide(){
    clearInterval(int);
    ind--;
    showSlide(ind);
}
function showSlide(i){
    if(i>=slides.length) ind = 0;
    else if(i<0) ind = slides.length-1;
    else ind = i;
    slides.forEach(  slide =>{
        slide.classList.remove("displaySlide");
    }  );
    slides[ind].classList.add("displaySlide");
}

// images
function initialize1(){
    if(slides1.length>0){
        slides1[ind1].classList.add("displaySlide");
        int1 = setInterval(nextImg, 2000);
console.log(slides1);
    }
}
function nextImg(){
    ind1++;
    showImg(ind1);
}
function prevImg(){
    clearInterval(int1);
    ind1--;
    showImg(ind1);
}
function showImg(i){
    if(i>=slides1.length) ind1 = 0;
    else if(i<0) ind1 = slides1.length-1;
    else ind1 = i;
    slides1.forEach(  slide =>{
        slide.classList.remove("displaySlide");
    }  );
    slides1[ind1].classList.add("displaySlide");
}
