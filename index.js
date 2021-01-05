let displayNum = ""
const display = document.querySelector(".display")
const btn = document.querySelectorAll(".btn")

for(i =0; i < btn.length; i++){
    btn[i].addEventListener("click", handleClick)
}

function handleClick(e) {
    const key = e.target.innerHTML
    if ((displayNum === "0") || (displayNum === "Err")) {
        displayNum = key
        display.innerHTML = displayNum
    } if (displayNum.length >= 9) {
        displayNum = "Err"
        display.innerHTML = displayNum
    } else {
        displayNum = displayNum + key
        display.innerHTML = displayNum
    }
}

document.querySelector(".clear").addEventListener("click", () => {
    displayNum = "0"
    display.innerHTML = displayNum
})

document.getElementById("calculate").addEventListener("click", equate)

function equate() {
    displayNum = eval(displayNum)
    display.innerHTML = displayNum
}
