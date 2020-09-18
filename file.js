window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log("working")

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "50px";
    document.getElementById("search-query").style.display="block"
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("search-query").style.display="none"
  }
}



