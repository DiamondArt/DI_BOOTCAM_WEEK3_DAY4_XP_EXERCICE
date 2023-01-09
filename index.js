/***********************************************************************************
 * Exercise challenge : Coloring Game
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description :
 * build a coloring game, when the user is clicking or dragging squares, move this in new area
 * @typeof {string|Array}
 * @typeof {number}
 * @typeof {function}
 * **********************************************************************************/ 

let area = document.querySelector('div#area');
let touchs = document.querySelector('div#touch');
let touchRow = document.createElement('div');
touchRow.className = "touchRow";
touchs.appendChild(touchRow)
let divForme = ['carre','losange','cercle']

/******************************************************************************
 * @function randomColor
 * @description: random hexadecimal color
 * @returns {string}
 ******************************************************************************/
function randomColor() {

    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0); 

    return `#${randColor.toUpperCase()}`
}

/******************************************************************************
 * @function generateDiv
 * @description: generate square div
 * @param {string} attributeValue
 * @returns {void}
 ******************************************************************************/
function generateDiv(attributeValue) {

    for ( let i = 0; i < 21; i++) {
        let itemTag = document.createElement('div');
        itemTag.setAttribute('id',attributeValue);
        itemTag.setAttribute('class',"box");
        itemTag.setAttribute('draggable',true);
        itemTag.addEventListener('dragstart', dragStart)
        itemTag.style.background = randomColor();
        touchRow.appendChild(itemTag);        
    }
}

/******************************************************************************
 * @function randomSquareForme
 * @description: random square div forme
 * @returns {void}
 ******************************************************************************/
function randomSquareForme() {
    touchRow.innerHTML = "";
    let nbre = Math.floor(Math.random() * 3);
    generateDiv(divForme[nbre]);
    console.log(divForme[nbre]);
}

/******************************************************************************
 * @function mixSquareForme
 * @description: mix square div form
 * @returns {void}
 ******************************************************************************/
function mixSquareForme() {
    touchRow.innerHTML = "";
    for ( let i = 0; i < 21; i++) {
        let itemTag = document.createElement('div')
        let nbre = Math.floor(Math.random() * 3);
        itemTag.setAttribute('id',divForme[nbre]);
        itemTag.setAttribute('class',"box");
        itemTag.setAttribute('draggable',true);
        itemTag.addEventListener('dragstart', dragStart)
        itemTag.style.background = randomColor();
        touchRow.appendChild(itemTag);        
    }
}

/******************************************************************************
 * @function dragStart
 * @description: function for event dragStart
 * @param {event}
 * @returns {void}
 ******************************************************************************/
function dragStart(event) {
    console.log("target:",  event.target)
    console.log("id: ",  event.target.id )
    event.dataTransfer.setData("text", event.target.id);
}

/******************************************************************************
 * @function dragDrop
 * @description: function for event drop
 * @param {event}
 * @returns {void}
 ******************************************************************************/
function dragDrop(event) {
    event.preventDefault();
      console.log(event);
    let data = event.dataTransfer.getData("text");
    console.log("data: ",  data) 
    let box = document.getElementById(data)
    event.target.appendChild(box);
}
/******************************************************************************
 * @function allowDrop
 * @description: function for event dragover
 * @param {event}
 * @returns {void}
 ******************************************************************************/
function allowDrop(event) {
    event.preventDefault();
  }
  
document.load = generateDiv(divForme[0]);
area.addEventListener('drop',dragDrop);
area.addEventListener('dragover',allowDrop);
document.querySelector("#transform").addEventListener('click',randomSquareForme);
document.querySelector("#mix").addEventListener('click',mixSquareForme);
document.querySelector("#clear").addEventListener('click',() => {
    window.location.reload()
});

