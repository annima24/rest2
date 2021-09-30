import createToDo from "/src/index.js";
import Project from "./project";

(function UI()   {    
//declaring variables!!!! yayyyyy

let content = document.querySelector('#content');
let toDoDiv = document.querySelector('#toDos');
let newProjectButton = document.querySelector('#newProjectButton')
let projects = []

let newProj = Project('Dishes')
let secondProj = Project('Laundry')
projects.push(newProj)
projects.push(secondProj)

newProj.addToDo(createToDo('dishes', 'clean em', 'tomorrow', 'high'))
newProj.addToDo(createToDo('laundry', 'wash em', 'today', 'highaf'))
newProj.addToDo(createToDo('groceries', 'get em', 'friday', 'mediano'))
secondProj.addToDo(createToDo('fish','banana', 'lettuce', 'mustard'))


//create new project with a button and a prompt assigns a name. 
const addProject = () =>    {
    const newProjectName = prompt()
    const newProject = Project(newProjectName)
    displayProject(newProject.getProjectName());
}  
//shows the projects under the project div
const displayProject = (newProjectName) => {
    let displayName = document.createElement('p')
    displayName.textContent = newProjectName;
    content.appendChild(displayName)
   }
//show the todos of a selected project
const displayToDos = (project) => {
    let display = document.createElement('p');
    display.textContent = project.getToDoTitles();
    toDoDiv.appendChild(display);
}

displayToDos(newProj)


newProjectButton.addEventListener('click', addProject);

})()

    


