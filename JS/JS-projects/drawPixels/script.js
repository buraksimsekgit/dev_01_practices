// your code

const addRow = document.getElementById("add-row");
const table = document.getElementById("table");
const selectColor = document.getElementById("select-color");
const fillColor = document.getElementById("fill-color");
const fillEmpty = document.getElementById("fill-empty");
const clear = document.getElementById("clear");
const customized = document.getElementById("customized");
const reset = document.getElementById("reset");
const rows = document.getElementById("rows");
const columns = document.getElementById("columns");


function makeRow(numberOfColumns = 20) {
    const tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    for (let i = 0; i < numberOfColumns; i++) {
      const tableData = document.createElement("td");
      tableRow.appendChild(tableData);
    }
  }

customized.addEventListener("click", () => {
  for (let i = 0; i < columns.value; i++) {
    makeRow(rows.value);
  }
});

reset.addEventListener("click", () => {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
  rows.value = 0;
  columns.value;
});

addRow.addEventListener("click", () => makeRow());

table.addEventListener("click", (event) => {
  if (event.target.tagName == "TD") {
    const className = event.target.className;
    if (className == "") {
      event.target.className = selectColor.value;
    } else {
      event.target.className = "";
    }
  }
});

table.addEventListener("dragover", (event) => {
  if (event.target.tagName == "TD") {
    event.target.className = selectColor.value;
  }
});

fillColor.addEventListener("click", () => {
  const tags = [...document.getElementsByTagName("td")];
  tags.forEach((tag) => {
    tag.className = selectColor.value;
  });
});

fillEmpty.addEventListener("click", () => {
  const tags = [...document.getElementsByTagName("td")];
  tags.forEach((tag) => {
    if (tag.className == "") {
      tag.className = selectColor.value;
    }
  });
});

clear.addEventListener("click", () => {
  const tags = [...document.getElementsByTagName("td")];
  tags.forEach((tag) => {
    tag.className = "";
  });
});