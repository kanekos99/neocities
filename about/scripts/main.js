const games_container_name = "#games-container";
const games_container = $(games_container_name);

const shows_container_name = "#shows-container";
const shows_container = $(shows_container_name);

const books_container_name = "#books-container";
const books_container = $(books_container_name);

const inventory_categories = [games, shows, books];

const app = {
  init: function () {
    loadInventory(games, games_container);
    loadInventory(shows, shows_container);
    loadInventory(books, books_container);
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
