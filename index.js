const countEl= document.getElementById("count-el")
const saveEl= document.getElementById("count-el")
const returnEl= document.getElementById("return-el")
const addEl = document.getElementById("add-el")
let count = 0

addEl.addEventListener("click", myFunction() )
function myFunction() {
    add()
    save()
}

function add() {
    count++
    countEl.textContent= count
    
}
function save() {
    let countStr = count + " - "
    returnEl.textContent += countStr 
    countEl.textContent= count
    count = 0
    
}