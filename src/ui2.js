import createToDo from "/src/index.js";

(function UI()   {    
let content = document.querySelector('#content');
console.log(createToDo)
let project = []

let titleBox = document.querySelector('#title');
let descBox = document.querySelector('#description');
let dueDateBox = document.querySelector('#dueDate');
let priorityBox = document.querySelector('#priority');
let addButton = document.querySelector('#btn');

addButton.addEventListener('click', function()  {
    let newToDo = createToDo(titleBox.value, descBox.value, dueDateBox.value, priorityBox.value)
    makeCard(newToDo);
    project.push(newToDo)
    console.log(project);
})


function makeCard(obj) {   
    
    let div = document.createElement('div')
    let tit = document.createElement('p')
    let desc = document.createElement('p')
    let due = document.createElement('p')
    let prio = document.createElement('p')
    
    div.classList.add('border')
    
    tit.textContent = `Title: ${obj.title}`
    desc.textContent = `Description: ${obj.description}`
    due.textContent = `Due Date: ${obj.dueDate}`
    prio.textContent = `Priority: ${obj.priority}`
    
    content.appendChild(div);
    div.appendChild(tit);
    div.appendChild(desc);
    div.appendChild(due);
    div.appendChild(prio);
}

})()
