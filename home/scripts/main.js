const changeLogBox_ID = "#changelog";
const changelogBox = $(changeLogBox_ID);

const toDoBox_ID = "#todo-list";
const toDoBox = $(toDoBox_ID);

const sortabeletodo = document.getElementById("todo-list");


const app = {
  init: function () {
    console.log("Hello world :)");
    loadChangelog();
    loadToDo();
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

new Sortable(sortabeletodo, {
  animation: 150,
});
