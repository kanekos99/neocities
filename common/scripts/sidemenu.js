const sideMenuHTML = `
    <div class="side-menu" id="side-menu">
      <a class="side-menu-button" href="https://kanekos.neocities.org/"
        ><i class="fa fa-paw paw-icon" aria-hidden="true"></i>Home</a
      >
      <a class="side-menu-button" href="https://kanekos.neocities.org/gallery/"
        ><i class="fa fa-paw paw-icon" aria-hidden="true"></i>Gallery</a
      >
      <a class="side-menu-button" href="https://kanekos.neocities.org/dressup/"
        ><i class="fa fa-paw paw-icon" aria-hidden="true"></i>Dress Up Game</a
      >
      <a class="side-menu-button" href="https://kanekos.neocities.org/guestbook/"
        ><i class="fa fa-paw paw-icon" aria-hidden="true"></i>Guest Book</a
      >
    </div>
`;

$(document).ready(() => {
  $(sideMenuHTML).insertBefore("#main-body");
});

var menuOpen = false;
function toggleSideMenu() {
  const sideBar = $("#side-menu");
  const mainBody = $("#main-body");

  if (menuOpen) {
    sideBar.removeClass("activemenu");
    mainBody.removeClass("slide-right");
    $(document.body).removeClass("lock-scroll");
    menuOpen = false;
  } else {
    sideBar.addClass("activemenu");
    mainBody.addClass("slide-right");
    $(document.body).addClass("lock-scroll");
    menuOpen = true;
  }
}
