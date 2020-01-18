
document.addEventListener("DOMContentLoaded", function(event){
	window.onscroll = function() {myFunction()};

	var navbar = document.getElementByClass("navbar");
	var sticky = navbar.offsetTop;

	function myFunction() {

	  //alert("yeet!!");
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky");
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}

});

