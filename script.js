const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
const submitButton = document.querySelector("button");

// delete event
function deletingRecord(event){
    const takingDeleteButtunRef = event.target;
    const deletedRowCame = takingDeleteButtunRef.parentNode.parentNode;
    deletedRowCame.remove();
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
    let editButton = document.createElement("button");
    
    editButton.innerText="Edit";
    deleteButton.innerText="Delete";
    // delete style
    deleteButton.style.backgroundColor="white";
    deleteButton.style.width="50px";
    deleteButton.style.height="30px";
    deleteButton.style.borderRadius="10px";
    // edit style
    editButton.style.backgroundColor="white";
    editButton.style.width="50px";
    editButton.style.height="30px";
    editButton.style.borderRadius="10px";

    // editing previous record through event listener
    editButton.addEventListener("click",editingRecord);
    // deleting previous record through event listener
    deleteButton.addEventListener("click",deletingRecord);

    option.appendChild(deleteButton);
    option.appendChild(editButton);

    tr.appendChild(option);
    tbody.appendChild(tr);
}

// form event
form.addEventListener("submit",takingEmployeeData);

// taking output from form of an object
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

      if(editOption.isEdit){
        editOnForm(employee);
      }else{
        addingEmployeeData(employee);
      }
      form.reset();

}

function editOnForm(employee){
      let  rowElement = editOption.rowElement ;
      let cell = rowElement.querySelectorAll("td");
      
      
        cell[0].innerText = employee.name,
        cell[1].innerText = employee.companyName,
        cell[2].innerText = employee.salary,
        cell[3].innerText = employee.gender,
        cell[4].innerText = employee.role,
        cell[5].innerText = employee.email
        
        // for(let key in employee){
        //   cell[key].innerText = employee[key];
        // }

      submitButton.innerText = "ADD EMPLOYEE";
      editOption = {
          isEdit : false,
          rowElement : null
      }
}