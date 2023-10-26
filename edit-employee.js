let editOption = {
     isEdit : false,
     rowElement : null
}

// editing event
function editingRecord(event){
    let row = event.target.parentNode.parentNode;
    let cell = row.querySelectorAll("td");
    
    let employeeInfo ={
        name : cell[0].innerText,
        companyName :  cell[1].innerText,
        salary :  cell[2].innerText,
        gender :  cell[3].innerText,
        role :  cell[4].innerText,
        email : cell[5].innerText
    }
    preFillingData(employeeInfo);


    editOption = {
        isEdit : true,
        rowElement : row
    }
    submitButton.innerText ="UPDATE";
}

function preFillingData(employeeRifill){
    form.name.value =employeeRifill.name,
    form.companyName.value =employeeRifill.companyName,
    form.salary.value =employeeRifill.salary,
    form.gender.value =employeeRifill.gender,
    form.role.value =employeeRifill.role,
    form.email.value =employeeRifill.email

    // for(let i in employeeRifill){
    //     form[i].value =employeeRifill[i];
    // }
    
}
