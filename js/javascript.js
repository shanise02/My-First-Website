	var slideIndex = 1;
	var myTimer;
	var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
    
    //slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    
     slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// next and previous control
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//current slide control 
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("sidebar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
    sidebar.classList.add("sticky")
	} 
	else {
    sidebar.classList.remove("sticky");
	}
}

function show_items1(){
	var click= document.getElementById("items1")
	if(click.style.display=="none"){
		click.style.display="block";
	}
	else{
		click.style.display="none";
	}	
}

function show_items2(){
	var click= document.getElementById("items2")
	if(click.style.display=="none"){
		click.style.display="block";
	}
	else{
		click.style.display="none";
	}	
}

function show_items3(){
	var click= document.getElementById("items3")
	if(click.style.display=="none"){
		click.style.display="block";
	}
	else{
		click.style.display="none";
	}	
}

function show_items4(){
	var click= document.getElementById("items4")
	if(click.style.display=="none"){
		click.style.display="block";
	}
	else{
		click.style.display="none";
	}	
}

