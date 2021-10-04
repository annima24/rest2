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
            let toDoList = document.createElement('div')
            todos.forEach(todo => {
                let singleTodo = document.createElement('p')
                singleTodo.textContent = `Task: ${todo.title}   Due:${todo.dueDate}`;
                toDoList.appendChild(singleTodo);
                    
            }) 
            return toDoList;     
    }




    return  {getProjectName, getToDos, addToDo, deleteToDo,getToDoTitles, todos};
}


export default Project