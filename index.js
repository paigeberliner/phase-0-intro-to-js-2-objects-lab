// Write your solution in this file!
const employee = {
    name: "Paige",
    street: "123 Main Street",
};


const LuizObject = {
    name: "luiz",
    favoriteMovie: "Shrek",
}


function updateEmployeeWithKeyAndValue (employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key]=value;
    return newEmployee;
}



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee [key]=value;
    return employee;
}

console.log (destructivelyUpdateEmployeeWithKeyAndValue (LuizObject,"favoriteMovie","Avatar"))
console.log (LuizObject)


function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee [key];
    return employee;
}