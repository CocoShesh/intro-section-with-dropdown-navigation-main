function ExpandMoreFeatures() {
  var content = document.getElementById("Content-features");
  var expandMoreIcon = document.getElementById("ExpandMoreFeatures");

  if (content.style.display === "none") {
    content.style.display = "block";
    expandMoreIcon.src = "images/icon-arrow-up.svg";
  } else {
    content.style.display = "none";
    expandMoreIcon.src = "images/icon-arrow-down.svg";
  }
}

function ExpandMoreCompany() {
  var content = document.getElementById("dropdown-company");
  var expandMoreIcon = document.getElementById("expand_More");

  if (content.style.display === "none") {
    content.style.display = "block";
    expandMoreIcon.src = "images/icon-arrow-up.svg";
  } else {
    content.style.display = "none";
    expandMoreIcon.src = "images/icon-arrow-down.svg";
  }
}

function burgerMenu() {
  var menu = document.getElementById("navBar");
  var side = document.getElementById("menu");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    side.style.top = "0";
  } else {
    side.style.top = "-100vh";
    menu.style.display = "none";
    // Hide the navigation menu
  }
}
