var whatever = document.getElementById("section-background");
whatever.onscroll = function() {
    moonFunction();
}

document.onwheel = function() {
    ende();
}

// Initial state
var scrollPos = 0;
var sec = document.getElementById("section-one");
var a = 0;
var b = 0;
var c = 0;
var zahl = -4.5985486469071746e-14;

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
        var bplus = b + 40;
        sectiontwo.style.transform = `translateX(${-bplus}px)`;
        texttwo.style.transform = `translateX(${-bplus}px)`;
        b = bplus;

        //Third 
        var sectionthree = document.getElementById("color3");
        var textthree = document.getElementById("text3");
        var cplus = c + 100;
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
        var bplus = b - 40;
        sectiontwo.style.transform = `translateX(${-bplus}px)`;
        texttwo.style.transform = `translateX(${-bplus}px)`;
        b = bplus;

        //Third 
        var sectionthree = document.getElementById("color3");
        var textthree = document.getElementById("text3");
        var cplus = c - 100;
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


/*
function moonFunction() { 
    if ((sec.getBoundingClientRect()).left < scrollPos) {
            var sectionone = document.getElementById("section-one");
            var styleone = window.getComputedStyle(sectionone);      
            var actualposition = parseInt(styleone.getPropertyValue("transform"));
            sectionone.style.bottom = actualposition + 10 + 'px';
        
            var sectiontwo = document.getElementById("section-two");
            var styletwo = window.getComputedStyle(sectiontwo);      
            var actualpositiontwo = parseInt(styletwo.getPropertyValue("bottom"));
            sectiontwo.style.bottom = actualpositiontwo + 30 + 'px';
        
            var sectionthree = document.getElementById("section-three");
            var stylethree = window.getComputedStyle(sectionthree);      
            var actualpositionthree = parseInt(stylethree.getPropertyValue("bottom"));
            sectionthree.style.bottom = actualpositionthree + 50 + 'px';
	}else {
            var sectionone = document.getElementById("section-one");
            var styleone = window.getComputedStyle(sectionone);      
            var actualposition = parseInt(styleone.getPropertyValue("bottom"));
            sectionone.style.bottom = actualposition - 10 + 'px';
        
            var sectiontwo = document.getElementById("section-two");
            var styletwo = window.getComputedStyle(sectiontwo);      
            var actualpositiontwo = parseInt(styletwo.getPropertyValue("bottom"));
            sectiontwo.style.bottom = actualpositiontwo - 30 + 'px';
        
            var sectionthree = document.getElementById("section-three");
            var stylethree = window.getComputedStyle(sectionthree);      
            var actualpositionthree = parseInt(stylethree.getPropertyValue("bottom"));
            sectionthree.style.bottom = actualpositionthree - 50 + 'px';
	// saves the new position for iteration.
}
scrollPos = (sec.getBoundingClientRect()).left;

}*/