function Project(name) {

let projectName = name;    
let todos = [];

    const getProjectName = () => {
        return projectName;
    }

    const getToDos = () => {
        return todos;
    }

    const addToDo = (newToDo) => {
        todos.push(newToDo)
    }

    const deleteToDo = (index) => {
        todos.splice(index, 1)
    }
    //returns the titles of each ToDo object
    const getToDoTitles = () => {
        if (todos.length === 1) {
        return todos[0].title 
    }
        else if (todos.length > 1){
            let toDoList = ``
            todos.forEach(todo => {
                toDoList += `${todo.title} `
            }) 
            return toDoList;
        }
    }




    return  {getProjectName, getToDos, addToDo, deleteToDo,getToDoTitles, todos};
}


export default Project