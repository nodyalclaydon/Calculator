let displayNum = 0
let invisibleNum = 0
const display = document.querySelector(".display")
const numBtn = document.querySelectorAll(".num")
const redBtn = document.querySelectorAll(".red")

for(i =0; i < numBtn.length; i++){
    numBtn[i].addEventListener("click", handleNumClick)
}

for(i =0; i < redBtn.length; i++){
    redBtn[i].addEventListener("click", handleRedClick)
}

function handleNumClick(e) {
    const key = e.target.innerHTML
    if (displayNum === 0 && invisibleNum === 0) {
        displayNum = key
        invisibleNum = key
        display.innerHTML = displayNum
        console.log("one!")
    } else if (display.innerHTML.length >= 9) {
        displayNum = 0
        invisibleNum = 0
        display.innerHTML = "Err"
        console.log("two!")
    } else if (displayNum != invisibleNum && displayNum === 0) {
        displayNum = key
        invisibleNum = invisibleNum + key
        display.innerHTML = displayNum
        console.log("three!")
    }else {
        displayNum = displayNum + key
        invisibleNum = invisibleNum + key
        display.innerHTML = displayNum
        console.log("four!")
    }
}

function handleRedClick(e) {
    const key = e.target.innerHTML
    invisibleNum = invisibleNum + key
    displayNum = 0
    console.log(invisibleNum)
}

document.querySelector(".clear").addEventListener("click", () => {
    displayNum = 0
    invisibleNum = 0
    display.innerHTML = "0"
})

document.getElementById("calculate").addEventListener("click", equate)

function equate() {
    invisibleNum = eval(invisibleNum)
    display.innerHTML = invisibleNum
}
