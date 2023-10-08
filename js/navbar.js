function mySearchBox(){
    var x = document.getElementById("searchdiv");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function myMenuBox(){
    var x = document.getElementById("menudiv");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function submenu(){
    var x = document.getElementById("submenu");
    var y = document.getElementById("subsubmenu");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    }
    else {
        x.style.display = "block";
        y.style.display = "none";
    }
}
function subsubmenu(){
    var y = document.getElementById("submenu");
    var x = document.getElementById("subsubmenu");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    }
    else {
        x.style.display = "block";
        y.style.display = "none";
    }
}
function navsubmenuShow(){
    var x = document.getElementById("galaxy-subnavbar");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function searchboxText(){
    var x = document.getElementById("searchbox").value;
      if(x.includes("home")){
        window.location.replace("/",);
      }
      else if(x.includes("about")){
        window.location.replace("/about/about.html",);
      }
      else if(x.includes("bedroom")){
        window.location.replace("/design/bedroom.html",);
      }
      else if(x.includes("living")){
        window.location.replace("/design/living.html",);
      }
      else if(x.includes("kitchen")){
        window.location.replace("/design/kitchen.html",);
      }
      else if(x.includes("dining")){
        window.location.replace("/design/dining.html",);
      }
      else if(x.includes("bathroom") || x.includes("washroom") || x.includes("restroom")){
        window.location.replace("/design/bathroom.html",);
      }
      else if(x.includes("kids") || x.includes("children")){
        window.location.replace("/design/kids.html",);
      }
      else if(x.includes("project")){
        window.location.replace("/projects/recent.html",);
      }
      else if(x.includes("review") || x.includes("ratings")){
        window.location.replace("/review/review.html",);
      }
      else if(x.includes("contact")){
        window.location.replace("/contact/contact.html",);
      }
      else if(x.includes("faq")){
        window.location.replace("/faq/faq.html",);
      }
      else {}
}