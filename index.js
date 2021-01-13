let displayNum = ""
let invisibleNum = ""
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
    if ((displayNum === "0") || (displayNum != invisibleNum)) {
        displayNum = key
        invisibleNum = invisibleNum + key
        display.innerHTML = displayNum
    } if (displayNum.length >= 9) {
        displayNum = "0"
        invisibleNum = ""
        display.innerHTML = "Err"
    } else {
        displayNum = displayNum + key
        invisibleNum = invisibleNum + key
        display.innerHTML = displayNum
    }
}

function handleRedClick(e) {
    const key = e.target.innerHTML
    invisibleNum = invisibleNum + key
    console.log(invisibleNum)
}

document.querySelector(".clear").addEventListener("click", () => {
    displayNum = "0"
    display.innerHTML = displayNum
    console.log(displayNum)
})

document.getElementById("calculate").addEventListener("click", equate)

function equate() {
    invisibleNum = eval(invisibleNum)
    displayNum = invisibleNum
    display.innerHTML = displayNum
}
