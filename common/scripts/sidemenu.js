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
      <a class="side-menu-button" href="https://kanekos.neocities.org/vampire-vn/"
        ><i class="fa fa-paw paw-icon" aria-hidden="true"></i>Visual Novel</a
      >
      <a class="side-menu-button" href="https://kanekos.neocities.org/phainon-shrine/"
        ><i class="fa fa-paw paw-icon" aria-hidden="true"></i>Shrine(s)</a
      >
      <a class="side-menu-button" href="https://kanekos.neocities.org/blog/"
        ><i class="fa fa-paw paw-icon" aria-hidden="true"></i>Blog</a
      >
      <a class="side-menu-button" href="https://kanekos.neocities.org/links/"
        ><i class="fa fa-paw paw-icon" aria-hidden="true"></i>Links</a
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
  const speechBubble = document.querySelector("#speech-bubble");

  const body = document.body;

  if (menuOpen) {
    sideBar.classList.remove("activemenu");
    mainBody.classList.remove("slide-right");
    body.classList.remove("lock-scroll");
    if (speechBubble) {
      speechBubble.style.display = "block";
    }
    menuOpen = false;
  } else {
    sideBar.classList.add("activemenu");
    mainBody.classList.add("slide-right");
    body.classList.add("lock-scroll");
    if (speechBubble) {
      speechBubble.style.display = "none";
    }
    menuOpen = true;
  }
}
