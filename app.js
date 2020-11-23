let employeesList = [
  { id: "1", name: "Moishe" },
  { id: "2", name: "Kipi" },
  { id: "3", name: "Zipi" },
  { id: "4", name: "Dana" },
  { id: "5", name: "Mike" },
  { id: "6", name: "Thomas" },
  { id: "7", name: "Anna" },
  { id: "8", name: "Mikel" },
];
localStorage.setItem("employeesList", JSON.stringify(employeesList));

let btnDiv = document.getElementById("btn_div");
let mainContentDiv = document.getElementById("main_content_div");

function createEmployeesList() {
  for (let i = 0; i < employeesList.length; i++) {
    let h3Component = document.createElement("h3");
    h3Component.innerText =
      employeesList[i].name + ", ID: " + employeesList[i].id;
    mainContentDiv.appendChild(h3Component);
  }
}
createEmployeesList();

function createEmploeBtn() {
  for (let i = 0; i < employeesList.length; i++) {
    let empBtn = document.createElement("button");
    empBtn.innerText = employeesList[i].name;
    empBtn.className = "del_btn btn btn-outline-danger";
    btnDiv.appendChild(empBtn);
    empBtn.onclick = (e) => {
      e.target.remove();
      for (let j = 0; j < employeesList.length; j++) {
        if (empBtn.innerText == employeesList[j].name) {
          employeesList.splice(j, 1);
          localStorage.setItem("employeesList", JSON.stringify(employeesList));
          mainContentDiv.innerHTML = "";
          createEmployeesList();
        }
      }
    };
  }
}
createEmploeBtn();

let delInput = document.getElementById("del_by_id");

function delById() {
  let idChecker = false;
  let delInputValue = +delInput.value;
  if (isNaN(delInputValue)) {
    alert("not valid input");
    delInput.value = " ";
    return;
  }
  for (let i = 0; i < employeesList.length; i++) {
    if (employeesList[i].id == delInputValue) {
      idChecker = true;
      employeesList.splice(i, 1);
      mainContentDiv.innerHTML = "";
      btnDiv.innerHTML = "";
      localStorage.setItem("employeesList", JSON.stringify(employeesList));
      createEmployeesList();
      createEmploeBtn();
    }
  }
  if (idChecker == false) {
    alert("id not found");
  }
  delInput.value = " ";
}
