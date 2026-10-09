const changeLogBox_ID = "#changelog";
const changelogBox = $(changeLogBox_ID);

const toDoBox_ID = "#todo-list";
const toDoBox = $(toDoBox_ID);

const sortabeletodo = document.getElementById("todo-list");

//announcements - latest change lost
const announcementChangeLogDate = document.getElementById(
  "announce-changelog-date",
);
const announcementChangeLogText = document.getElementById(
  "announce-changelog-text",
);

// art showcase
const featuredArtGallery = document.getElementById("featured-art-gallery");
const latestArtGallery = document.getElementById("latest-art-gallery");
const modalImg = document.getElementById("modal-image");

const app = {
  init: function () {
    console.log("Hello world :)");
    loadChangelog();
    loadToDo();
    loadAnnoucements();
    loadArt();
  },
};

app.init();

function loadChangelog() {
  changelog.forEach((log, index) => {
    let statusLogHTML = `
      <p class="home-text update-text">
        <b>${log.date}</b>
        <br><br>
        ${log.status}
      </p>
    `;

    if (index < changelog.length - 1) {
      statusLogHTML += `<hr class="dotted-divider-2" />`;
    }

    changelogBox.append(statusLogHTML);
  });
}

function loadToDo() {
  todo.forEach((item) => {
    if (item.status !== "completed") {
      let toDoItemHTML =
        `                      
        <li class="list-group-item" draggable="true">
          <div class="row align-items-start pe-2">
            <div class="col-3 checkbox-col">
              <img src="./home/assets/thumbtack.png" class="list-thumbtack">
            </div>
            <div class="col-9 todo-col">
              ` +
        item.label +
        `
            </div>
          </div>
        </li>`;
      toDoBox.append(toDoItemHTML);
    }
  });
}

function loadAnnoucements() {
  announcementChangeLogDate.innerHTML = changelog[0].date;
  announcementChangeLogText.innerHTML = changelog[0].status;
}

function loadArt() {
  featuredArt.forEach((image) => {
    const imageHTML = `
      <div class="notice-art-thumbnail">
        <img
          class="notice-art-img"
          src="${image}"
          loading="lazy"
          onclick="showImage(this)"
          data-bs-toggle="modal"
          data-bs-target="#galleryModal"
        />
      </div>
    `;
    featuredArtGallery.insertAdjacentHTML("beforeend", imageHTML);
  });

  sketch_images.slice(0, 3).forEach((image) => {
    const baseUrl = "https://kanekos99.github.io/sketch-gallery";
    const imageUrl = image.replace(/^\./, baseUrl);

    const imageHTML = `
      <div class="notice-art-thumbnail">
        <img
          class="notice-art-img"
          src="${imageUrl}"
          loading="lazy"
          onclick="showImage(this)"
          data-bs-toggle="modal"
          data-bs-target="#galleryModal"
        />
      </div>
    `;
    latestArtGallery.insertAdjacentHTML("beforeend", imageHTML);
  });
}

function showImage(image) {
  modalImg.style.display = "none";
  modalImg.src = image.src;

  modalImg.onload = function () {
    modalImg.style.display = "block";
  };
}

new Sortable(sortabeletodo, {
  animation: 150,
});
