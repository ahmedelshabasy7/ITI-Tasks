let slideIndex = 1;
let slide_active = false ;
showSlides(slideIndex);

function next() {
    showSlides(slideIndex += 1);
    //slideIndex = (slideIndex + 1) %  photos.length
}

function previous() {
    showSlides(slideIndex -= 1);
    //slideIndex = (slideIndex - 1) %  photos.length
}

let slideInterval;

function slide() {
    
    if(!slide_active){
        slide_active = true ;
        slideInterval = setInterval(() => {
            next();
        }, 500); 
        update();
    }
    
}

function stop() {
    if(slide_active){
        clearInterval(slideInterval);
        slide_active = false ;
        update();
    }
}

function showSlides(n){
    let photos = document.getElementsByClassName("img");
    if(n > photos.length){
        slideIndex = 1 ;
    }
    else if(n < 1){
        slideIndex = photos.length ;
    }
    for(let i = 0 ; i < photos.length ; i++){
        photos[i].style.display = "none";
    }
    photos[slideIndex - 1].style.display = "block";
}



function update(){
    document.getElementById("nxt").disabled = slide_active;
    document.getElementById("prv").disabled = slide_active;
    document.getElementById("slishow").disabled = slide_active;
    document.getElementById("stp").disabled = !slide_active;
}
