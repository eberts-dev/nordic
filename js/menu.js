function Menu() {
  var button = document.getElementById("mobile-btn");
  var menu = document.getElementById("menu");
  
  if (menu.style.display === "block") {
    button.classList.remove("active");
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
    button.classList.add("active");
  }
}

function SubMenu() {
  var sMenu = document.getElementById("menu__sublist");

  if (sMenu.style.display === "block") {
    sMenu.style.display = "none";
  } else {
    sMenu.style.display = "block";
  }

}

function SubMenuWeb() {
  var wMenu = document.getElementById("subWeb");
  var eMenu = document.getElementById("events");

  if (wMenu.style.display === "block") {wMenu.style.display = "none";} else {wMenu.style.display = "block";}
  
  if (eMenu.style.display === "block" && wMenu.style.display === "none") {
      eMenu.style.display === "block"
  } else if () {

  }

}

