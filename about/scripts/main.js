const games_container_name = "#games-container";
const games_container = $(games_container_name);

const shows_container_name = "#shows-container";
const shows_container = $(shows_container_name);

const books_container_name = "#books-container";
const books_container = $(books_container_name);

const catnekos_gallery_name = "#catnekos_gallery";
const catnekos_gallery = $(catnekos_gallery_name);

const modalImg = document.getElementById("modal-image");

const inventory_categories = [games, shows, books];

const imageCategories = [
  {
    categoryArray: catnekos,
    categoryElementId: catnekos_gallery,
  },
];

const app = {
  init: function () {
    loadInventory(games, games_container);
    loadInventory(shows, shows_container);
    loadInventory(books, books_container);
    loadImages();
  },
};

app.init();

function loadInventory(category, container) {
  category.forEach((item) => {
    const itemHtml = `
      <div class="inventory-item">
          <a href="${item.link}">
            <img
                src="${item.icon}"
                class="inventory-img"
            />
          </a>
          <p>
            ${item.name}
          </p>
     </div>
    `;
    container.append(itemHtml);
  });
}

/*------------------------ for image gallery -------------------------------- */

function loadImages() {
  imageCategories.forEach((category) => {
    category.categoryArray.forEach((image) => {
      //for neocities
      let externalUrl = "https://kanekos99.github.io/phainon-shrine" + image;

      let galleryClass = "gallery-thumbnail";

      const imageThumbnailHTML = `
      <img
        src="${image}"
        loading="lazy"
        class="${galleryClass} img-fluid"
        onclick="showImage(this)"
        data-bs-toggle="modal"
        data-bs-target="#galleryModal"
      />`;

      category.categoryElementId.append(imageThumbnailHTML);
    });
  });
}

//Lazy Load Option 2 - no small image placeholder
document.querySelectorAll("img.gallery-thumbnail").forEach((img) => {
  img.style.opacity = 0; // start hidden
  img.addEventListener("load", () => {
    img.style.transition = "opacity 0.7s ease";
    img.style.opacity = 1; // fade in once loaded
  });
});

function showNextOrPrevImg(direction) {
  const visibleImages = $("img.gallery-thumbnail:visible")
    .not("#modal-image")
    .toArray();
  const currentSrc = modalImg.src;
  let currentIndex = visibleImages.findIndex((img) => img.src === currentSrc);
  let nextIndex = currentIndex + direction;
  if (direction === 1 && nextIndex >= visibleImages.length) {
    nextIndex = 0;
  } else if (direction === -1 && nextIndex === -1) {
    nextIndex = visibleImages.length - 1;
  }
  showImage(visibleImages[nextIndex]);
}

function showImage(image) {
  modalImg.style.display = "none";
  modalImg.src = image.src;

  modalImg.onload = function () {
    modalImg.style.display = "block";
  };
}
