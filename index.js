// Your code here
function createEmployeeRecord(array){
    let punchCard = {}
    punchCard['firstName'] = array[0]
    punchCard['familyName'] = array[1]
    punchCard['title'] = array[2]
    punchCard['payPerHour'] = array [3]
    punchCard['timeInEvents'] = []
    punchCard['timeOutEvents'] = []
    return punchCard
}

function createEmployeeRecords(nestedArrays){
    return nestedArrays.map(createEmployeeRecord)
}

function createTimeInEvent(employee, dateStamp){
    let timeInObj = {'type': 'TimeIn', 'date': dateStamp.slice(0,-5), 'hour': parseInt(dateStamp.slice(-4))}
    employee['timeInEvents'].push(timeInObj)
    return employee
    
}

function createTimeOutEvent(employee, dateStamp){
    let timeOutObj = {'type': 'TimeOut', 'date': dateStamp.slice(0,-5), 'hour': parseInt(dateStamp.slice(-4))}
    employee['timeOutEvents'].push(timeOutObj)
    return employee
    
}

function hoursWorkedOnDate (employee, date){
    let startTime
    let endTime
    for (e of employee['timeInEvents']){
        if (e['date'] === date){
            startTime = e['hour']
        }
    }
    for (e of employee['timeOutEvents']){
        if (e['date'] === date){
            endTime = e['hour']
        }
    }
    
    
    return endTime - startTime
}