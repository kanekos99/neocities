const changeLogBox_ID = "#changelog";
const changelogBox = $(changeLogBox_ID);

const toDoBox_ID = "#todo-list";
const toDoBox = $(toDoBox_ID);

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
        <li class="list-group-item">
          <div class="row align-items-start pe-2">
            <div class="col-3 checkbox-col">
              <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
               />
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
