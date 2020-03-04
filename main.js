
window.setInterval('refresh()', 1000); 

// Refresh or reload page.
function refresh() {
    const d = new Date();
    const s = d.getSeconds();
    
    if (s%10 === 0) {
        window.location.reload();
    }   
}


const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();

class generateRandom{
    constructor(lastNumb, length) {
        this.lastNumb = lastNumb
        this.length = length
        this.numbArray = new Array()
    }

    generateArray() {
        while (this.numbArray.length != this.length) {
            const number = Math.floor(Math.random() * this.lastNumb) + 1
            if (!this.numbArray.includes(number)) {
                this.numbArray.push(number)
            }    

        }
    }
    getArray() {
        this.generateArray()
        return this.numbArray
    }
}

function activateHour1() {
    cellNum = Math.floor(hour / 10)
    obj = new generateRandom(3, cellNum)
    numArr = obj.getArray()
    cellDict = {
        1: "h1_1",
        2: "h1_2",
        3: "h1_3"
    };
    for (let num of numArr) {
        i = cellDict[num]
        active = document.getElementById(i);
        active.classList.add("active")
    }
}

function activateHour2() {
    x = Math.floor(hour / 10) * 10
    cellNum = hour - x
    obj = new generateRandom(9, cellNum)
    numArr = obj.getArray()
    cellDict = {
        1:"h2_1",
        2:"h2_2",
        3:"h2_3",
        4:"h2_4",
        5:"h2_5",
        6:"h2_6",
        7:"h2_7",
        8:"h2_8",
        9:"h2_9",
    }
    for (let num of numArr) {
        i = cellDict[num]
        active = document.getElementById(i);
        active.classList.add("active")
    }
}

function activateMinute1() {
    cellNum = Math.floor(minute / 10)
    obj = new generateRandom(6, cellNum)
    numArr = obj.getArray()
    cellDict = {
        1: "m1_1",
        2: "m1_2",
        3: "m1_3",
        4: "m1_4",
        5: "m1_5",
        6: "m1_6",
    };
    for (let num of numArr) {
        i = cellDict[num]
        active = document.getElementById(i);
        active.classList.add("active")
    }
}

function activateMinute2() {
    x = Math.floor(minute / 10) * 10
    cellNum = minute - x
    obj = new generateRandom(9, cellNum)
    numArr = obj.getArray()
    cellDict = {
        1: "m2_1",
        2: "m2_2",
        3: "m2_3",
        4: "m2_4",
        5: "m2_5",
        6: "m2_6",
        7: "m2_7",
        8: "m2_8",
        9: "m2_9",
    };
    for (let num of numArr) {
        i = cellDict[num]
        active = document.getElementById(i);
        active.classList.add("active")
    }
}
activateHour1()
activateHour2()
activateMinute1()
activateMinute2()