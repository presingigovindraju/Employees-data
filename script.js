const tbody = document.querySelector("tbody");
const form = document.querySelector("form");

function deletingRecord(event){
    const takingDeleteButtunRef = event.target;
    const deletedRowCame = takingDeleteButtunRef.parentNode.parentNode;
    deletedRowCame.remove();
}
function updatingRecord(event){
     let takingUpdateButtonRef = event.target.parentNode.parentNode;
     console.log(takingUpdateButtonRef.name);
}

function addingEmployeeData(employee){
    const tr = document.createElement("tr");
    for(let key in employee){
       const td = document.createElement("td");
       td.innerText = employee[key];
       tr.appendChild(td);
       tbody.appendChild(tr);
    }
    let option = document.createElement("td");
    let deleteButton = document.createElement("button");
    let updateButton = document.createElement("button");
    updateButton.innerText="update";
    deleteButton.innerText="Delete";
    // delete style
    deleteButton.style.backgroundColor="white";
    deleteButton.style.width="50px";
    deleteButton.style.height="30px";
    deleteButton.style.borderRadius="10px";
    // upadate style
    updateButton.style.backgroundColor="white";
    updateButton.style.width="50px";
    updateButton.style.height="30px";
    updateButton.style.borderRadius="10px";
    updateButton.addEventListener("click",updatingRecord);
    // deleting previous record
    deleteButton.addEventListener("click",deletingRecord);

    option.appendChild(deleteButton);
    option.appendChild(updateButton);
    tr.appendChild(option);
    tbody.appendChild(tr);
}


form.addEventListener("submit",takingEmployeeData);

function takingEmployeeData(event){
    event.preventDefault();
      let employee = {
        name : form.name.value,
        companyName : form.companyName.value,
        salary : form.salary.value,
        gender : form.gender.value,
        role : form.role.value,
        email : form.email.value
      }
      addingEmployeeData(employee);
      form.reset();
}



