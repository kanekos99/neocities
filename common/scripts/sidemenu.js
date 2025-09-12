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

document.addEventListener("DOMContentLoaded", () => {
  const mainBody = document.querySelector("#main-body");
  mainBody.insertAdjacentHTML("beforebegin", sideMenuHTML);
});

let menuOpen = false;
function toggleSideMenu() {
  const sideBar = document.querySelector("#side-menu");
  const mainBody = document.querySelector("#main-body");
  const body = document.body;

  if (menuOpen) {
    sideBar.classList.remove("activemenu");
    mainBody.classList.remove("slide-right");
    body.classList.remove("lock-scroll");
    menuOpen = false;
  } else {
    sideBar.classList.add("activemenu");
    mainBody.classList.add("slide-right");
    body.classList.add("lock-scroll");
    menuOpen = true;
  }
}
