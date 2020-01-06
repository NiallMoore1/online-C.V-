// testimonial slider

const sliderContainer=document.querySelector(".test-slider");
const slides=sliderContainer.children;
const containerWidth=sliderContainer.offsetWidth;
const margin=15;
let itemPerSlide=0;
let slideDots;

//responsive
const responsive=[
    {breakPoint:{width:0,item:1}},
    {breakPoint:{width:991,item:2}}
]

function load(){
    for(Let i=0; i<responsive.length; i++)
        if(window.innerWidth>responsive[i].breakPoint.width){

        }
    
    Start();
}

function start(){
    totalWidth=0;
    for(Let i=0; i<slides.length; i++){
        slides[i].style.width=(containerWidth/itemPerSlide)-margin + "px";
        slides[i].style.margin=margin/2 + "px";
        totalWidth+=containerWidth/itemPerSlide;

    }
    sliderContainer.style.width=totalWidth + "px";
     slideDots=Math.ceil(slides.length/itemPerSlide);
    //console.log(slideDots)

    for(Let i=0; i<slideDots; i++){
        const div=document.createElement("div");
        div.id=i;
        div.setAttribute("onclick","controlSlide(this)");
        if(i==0){
            div.classList.add("active");
        }
        document.querySelector(".slide-controls").appendChild(div);
    }
}

Let currentSlide=0;
Let autoSlide=0;

function controlSlide(element){
    clearInterval(timer)
      timer=setInterval(autoPlay,5000);
     autoSlide=element.id;
    currentSlide=element.id;
    changeSlide(currentSlide)
}

function changeSlide(currentSlide){
    controlButtons=document.querySelector(".slide-controls").children;
        
    for(Let i=0; i<controlButtons.length; i++){        
        controlButtons[i].classList.remove("active")
    }
    //console.log(currentSlide)            
    controlButtons[currentslide].classList.add("active")

    sliderContainer.style.marginLeft=-(containerWidth*currentSlide) + "px";
}

//autoplay 

function autoPlay(){
    //change between line 74 and 75
    //console.log("call")
    console.log(slideDots-1)
    if(autoSlide==slideDots-1){
        autoSlide=0; 
    }
    else{
        autoSlide++;
    }
    changeSlide(autoSlide)
}

Let timer=setInterval(autoPlay,5000),
window.onload=load();