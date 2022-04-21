//header
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var x = window.matchMedia("(min-width: 900px)")
        var currentScrollPos = window.pageYOffset;
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30 && prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
        document.getElementById("header").style.background = "white";
        document.getElementById("bg-header").style.opacity = "1";
        document.getElementById("open-nav").style.color="black";
        document.getElementById("user").style.color="black";
    
      }
     
      else {
        document.getElementById("header").style.top = "0px";
        document.getElementById("header").style.background = "none";
        document.getElementById("bg-header").style.opacity = "0.3";
        document.getElementById("open-nav").style.color="white";
        document.getElementById("user").style.color="white";
      }
      prevScrollpos = currentScrollPos;
    
      if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("intro-h1").style.marginLeft = "0";
        document.getElementById("intro-p").style.marginLeft = "0";
    
      }
    
    }


// Nav 
// Open Nav
function openNav(){
    document.getElementById("nav").style.width="30%";
}
// close nav
function closeNav(){
    document.getElementById("nav").style.width="0%";
}

