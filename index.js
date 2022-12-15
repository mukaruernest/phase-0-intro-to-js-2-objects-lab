// Write your solution in this file!
const employee = {
    name: "Ernest", 
    streetAddress: "Konza"
}

function updateEmployeeWithKeyAndValue(obj,key,value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}
const newEmployee = updateEmployeeWithKeyAndValue(employee,"name","Carol")

function deleteFromEmployeeByKey(obj, key){
    const objNew = {...employee}
    delete objNew[key]
    return objNew
}
const deletedEmployee = deleteFromEmployeeByKey(employee,"streetAddress")

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value
    return obj
}
anotherEmployee=destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Benamalines")

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key] 
    return obj
}
destructiveEmployee = destructivelyDeleteFromEmployeeByKey(employee,"name")

