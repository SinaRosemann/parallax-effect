// Throttle and fire Onscroll Event
var scrolling = false;
var whatever = document.getElementById("section-background");
whatever.onscroll = function() {
    scrolling = true;
}


setInterval( function() {
  if ( scrolling ) {
    scrolling = false;
    moonFunction();
  }
}, 150 );

// Back to initial position
document.onwheel = function() {
    ende();
}
document.ontouchmove = function() {
    ende();
}

// Initial state
var scrollPos = 0;
var sec = document.getElementById("section-one");
var a = 0;
var b = 0;
var c = 0;



function moonFunction() { 
    if ((sec.getBoundingClientRect()).left < scrollPos) {
        // First 
        var sectionone = document.getElementById("color1");
        var textone = document.getElementById("text1");
        var aplus = a + 10;
        sectionone.style.transform = `translateX(${-aplus}px)`;
        textone.style.transform = `translateX(${-aplus}px)`;
        a = aplus;

        //Second 
        var sectiontwo = document.getElementById("color2");
        var texttwo = document.getElementById("text2");
        var bplus = b + 25;
        sectiontwo.style.transform = `translateX(${-bplus}px)`;
        texttwo.style.transform = `translateX(${-bplus}px)`;
        b = bplus;

        //Third 
        var sectionthree = document.getElementById("color3");
        var textthree = document.getElementById("text3");
        var cplus = c + 50;
        sectionthree.style.transform = `translateX(${-cplus}px)`;
        textthree.style.transform = `translateX(${-cplus}px)`;
        c = cplus;

        
	}else if ((sec.getBoundingClientRect()).left > scrollPos) {
        // First 
        var sectionone = document.getElementById("color1");
        var textone = document.getElementById("text1");
        var aplus = a - 10;
        sectionone.style.transform = `translateX(${-aplus}px)`;
        textone.style.transform = `translateX(${-aplus}px)`;
        a = aplus;

        //Second 
        var sectiontwo = document.getElementById("color2");
        var texttwo = document.getElementById("text2");
        var bplus = b - 25;
        sectiontwo.style.transform = `translateX(${-bplus}px)`;
        texttwo.style.transform = `translateX(${-bplus}px)`;
        b = bplus;

        //Third 
        var sectionthree = document.getElementById("color3");
        var textthree = document.getElementById("text3");
        var cplus = c - 50;
        sectionthree.style.transform = `translateX(${-cplus}px)`;
        textthree.style.transform = `translateX(${-cplus}px)`;
        c = cplus;
    }
scrollPos = (sec.getBoundingClientRect()).left;
}

function ende() {
    if((scrollPos > -1 )){
        var sectionone = document.getElementById("color1");
        var textone = document.getElementById("text1");
        sectionone.style.transform = `translateX(0px)`;
        textone.style.transform = `translateX(0px)`;
        a = 0;

        var sectiontwo = document.getElementById("color2");
        var texttwo = document.getElementById("text2");
        sectiontwo.style.transform = `translateX(0px)`;
        texttwo.style.transform = `translateX(0px)`;
        b = 0;

        var sectionone = document.getElementById("color3");
        var textthree = document.getElementById("text3");
        sectionone.style.transform = `translateX(0px)`;
        textthree.style.transform = `translateX(0px)`;
        c= 0;

    }
}
