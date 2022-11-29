let employee = {name: `bob`, streetAddress: `1234 roadway`};

function updateEmployeeWithKeyAndValue(obj, key, value) {
 let copyemployee = {...obj}
 copyemployee[key] = value
 return copyemployee

}  

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(obj, key) {
    let copyemployee = {...obj}
    delete copyemployee[key]
    return copyemployee
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}