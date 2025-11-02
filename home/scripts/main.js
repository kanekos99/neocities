const changeLogBox_ID = "#changelog";
const changelogBox = $(changeLogBox_ID);

const app = {
  init: function () {
    console.log("Hello world :)");
    loadChangelog();
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
