import createToDo from "/src/index.js";
import Project from "./project";

(function UI()   {    
//declaring variables!!!! yayyyyy

let content = document.querySelector('#content');
let toDoDiv = document.querySelector('#toDos');
let newProjectButton = document.querySelector('#newProjectButton')
let toDoButton = document.querySelector('#addToDoButton')
let selectedProjectDiv = document.querySelector('#selectedProject')
let projects = []
let selectedProject 



//create new project with a button and a prompt assigns a name. 
const addProject = () =>    {
    const newProjectName = prompt()
    const newProject = Project(newProjectName)
    projects.push(newProject);
    displayProjects();
    selectProject();
//    console.log(projects)

}  

//shows the projects under the project div
const displayProjects = () => {
    content.textContent = '';
    projects.forEach(project => {
        let projectName = document.createElement('p')
        projectName.textContent = project.getProjectName();
        content.appendChild(projectName)
    })
}

//change selected project
const selectProject = () => {
    content.childNodes.forEach(node => node.addEventListener('click', function(e)   {
        let arr = Array.from(content.childNodes)
        arr.forEach((element , i) => {
            if (element.textContent === e.target.textContent)   {
                selectedProject = projects[i]
                selectedProjectDiv.textContent = selectedProject.getProjectName()
                displayToDos(selectedProject)
            } 
            }
            )
        }));
}   
//show the todos of a selected project
const displayToDos = (project) => {
    toDoDiv.textContent = ''
    let display = document.createElement('div');
    display = project.getToDoTitles();
    toDoDiv.appendChild(display)
}
//add todo to a selected project
const addToDo = () => {
    alert(selectedProject.getProjectName())
    let title = prompt('Task name?');
    let date = prompt('due date')
    selectedProject.addToDo(createToDo(title, date));
    displayToDos(selectedProject)
}
newProjectButton.addEventListener('click', addProject);
toDoButton.addEventListener('click', addToDo)

})()


































// let newProj = Project('Dishes')
// let secondProj = Project('Laundry')
// projects.push(newProj)
// projects.push(secondProj)

// newProj.addToDo(createToDo('dishes', 'clean em', 'tomorrow', 'high'))
// newProj.addToDo(createToDo('laundry', 'wash em', 'today', 'highaf'))
// newProj.addToDo(createToDo('groceries', 'get em', 'friday', 'mediano'))
// newProj.addToDo(createToDo('groceries', 'get em', 'friday', 'mediano'))
// secondProj.addToDo(createToDo('fish','banana', 'lettuce', 'mustard'))
    


