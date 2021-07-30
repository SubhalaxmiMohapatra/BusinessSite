
// Mobile Menu

document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}


// About us Tab

var aboutUs = {
  "Mission": "To enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and consistent competitive advantage for our clients around the world.",
  "Vision": " Our vision is to create innovative products and deliver unique services which process quality and customer satisfaction to add value to your business..",
  "Values": "<ul><li>WEBSITE PURPOSE</li><li>SIMPLICITY</li><li>NAVIGATION</li><li>VISUAL HIERARCHY</li><li>CONTENT</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var aboutUsTabs = document.getElementsByClassName("single-tab");

for (var a = 0; a < aboutUsTabs.length; a++) {
  aboutUsTabs[a].onclick = function() {
    var clickedValue = this.innerHTML;
    document.getElementById("box-text").innerHTML = aboutUs[clickedValue];

    for (var b = 0; b < aboutUsTabs.length; b++) {
      aboutUsTabs[b].style["background-color"] = unseletectedColor;
      aboutUsTabs[b].style["font-weight"] = "normal";
    }

    this.style["background-color"] = seletectedColor;
    this.style["font-weight"] = "bold";


  }
}



// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'customized website design that perfect for your business or personal site.'
  },

  {
    'title': 'Poster Design',
    'text': 'is the creative construction of an idea, product, or event placed on a poster. It typically combines graphic design with marketing as it includes both textual and graphical elements and should be informative as well as eye-catching.'
  },

  {
    'title': 'Video Editing',
    'text': 'is the process of editing segments of motion video production footage, special effects and sound recordings in the post-production process. ....'
  }
  
];

var previousArrow = document.getElementById("service-previous");
var nextArrow = document.getElementById("service-next");
var serviceTitleArea = document.getElementById("service-title");
var serviceTextArea = document.getElementById("service-text");

var currentService = 0;

nextArrow.onclick = function() {
  if (currentService == (ourServices.length - 1)) {
    currentService = 0;
  } else {
    currentService += 1;
  }
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitleArea.innerHTML = title;
  serviceTextArea.innerHTML = text;
}

previousArrow.onclick = function() {
  if (currentService == 0) {
    currentService = ourServices.length - 1;
  } else {
    currentService -= 1;
  }
  
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitleArea.innerHTML = title;
  serviceTextArea.innerHTML = text;
}




// Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();


  
   


   