window.onscroll = function() {
    moonFunction();
    parallax();

}

window.onload = function () {
    minMargin();
}


// Initial state
var scrollPos = 0;

function moonFunction() { 
    if ((document.body.getBoundingClientRect()).top < scrollPos) {
        document.getElementById("moon").className = "moonmove";
	}else {
            document.getElementById("moon").className = "moonback";
	// saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
}
}

function parallax () {
    var moonMove = document.getElementById("moon");
    var moonheight = document.getElementById("section-moon").clientHeight;
    var maxheight = moonheight - 250 + "px";
    var maxmobile = moonheight - 50 + "px";
    var windowsize = window.innerWidth;


    moonMove.style.bottom = (window.pageYOffset /8) + 200 + 'px';

    if(moonMove.style.bottom > maxheight && windowsize > 992){
        moonMove.style.bottom = maxheight;
    }
    if(moonMove.style.bottom > maxheight && windowsize < 992) {
        moonMove.style.bottom = maxmobile;
    }

    var textMove = document.getElementById("section-content");
    textMove.style.top = -(window.pageYOffset /4) + 'px';
}


function minMargin() {
    var minMargin = document.getElementById("section-1");
    
    var moonMove = document.getElementById("moon");
    var moonheight = document.getElementById("section-moon").clientHeight; 

    minMargin.style.marginTop = moonheight + "px";
}