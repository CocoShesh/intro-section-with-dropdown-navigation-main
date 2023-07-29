var listItem = document.getElementById("list-item");
var featureContent = document.getElementById("feature-content");
var register = document.getElementById("register-id");
var login = document.getElementById("login-id");
//This function sets the top position of the burger menu to 0vh
function handleBurgerMenu() {
  listItem.style.top = "";
  register.style.top = "";
  login.style.top = "";
}
//This function sets the top position of the burger menu to -200vh
function handleCloseMenu() {
  listItem.style.top = "-200vh";
  register.style.top = "-200vh";
  login.style.top = "-200vh";
}
function handleFeaturesContent() {
  // Get the element with the id "feature-content"
  var featureContent = document.getElementById("feature-content");
  // Get the element with the id "arrow-up"
  var arrowUp = document.getElementById("arrow-up");
  // If the element with the id "feature-content" is not visible
  if (featureContent.style.display === "none") {
    // Set the display style of the element with the id "feature-content" to "block"
    featureContent.style.display = "block";
    // Set the src attribute of the element with the id "arrow-up" to the image with the id "icon-arrow-up.svg"
    arrowUp.src = "images/icon-arrow-up.svg";
    // Set the top style of the element with the id "login" to "50%"
    login.style.top = "50%";
    // Set the top style of the element with the id "register" to "60%"
    register.style.top = "60%";
    // Otherwise
  } else {
    // Set the display style of the element with the id "feature-content" to "none"
    featureContent.style.display = "none";
    // Set the src attribute of the element with the id "arrow-up" to the image with the id "icon-arrow-down.svg"
    arrowUp.src = "images/icon-arrow-down.svg";
    // Set the top style of the element with the id "login" to "0%"
    login.style.top = "";
    // Set the top style of the element with the id "register" to "0%"
    register.style.top = "";
  }
}
function handleCompanyContent() {
  // Get the element with the id "company-content"
  var companyContent = document.getElementById("company-content");
  // Get the element with the id "arrow-up-company"
  var arrowUp = document.getElementById("arrow-up-company");
  // If the company content is not currently displayed, display it
  if (companyContent.style.display === "none") {
    companyContent.style.display = "block";
    // Set the src of the arrowUp element to the icon-arrow-up.svg
    arrowUp.src = "images/icon-arrow-up.svg";
    // Set the top position of the login and register elements to 70%
    login.style.top = "70%";
    register.style.top = "80%";
    // Otherwise, hide the company content
  } else {
    companyContent.style.display = "none";
    // Set the src of the arrowUp element to the icon-arrow-down.svg
    arrowUp.src = "images/icon-arrow-down.svg";
    // Set the top position of the login and register elements to 0%
    login.style.top = "";
    register.style.top = "";
  }
}
