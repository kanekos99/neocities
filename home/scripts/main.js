const app = {
  init: function () {
    console.log("Hello world :)");
  },
};

app.init();

const body = document.querySelector("body");
var sideBar = $("#side-menu");
var mainBody = $("#main-body");

var menuOpen = false;
function toggleSideMenu() {
  if (menuOpen) {
    sideBar.removeClass("active");
    mainBody.removeClass("slide-right");
    $(document.body).removeClass("lock-scroll");
    menuOpen = false;
  } else {
    sideBar.addClass("active");
    mainBody.addClass("slide-right");
    $(document.body).addClass("lock-scroll");
    menuOpen = true;
  }
}
