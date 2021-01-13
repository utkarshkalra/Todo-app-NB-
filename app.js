const todoinput=document.querySelector(".inputtodo");
const addbutton=document.querySelector(".addtodo");
const todolist=document.querySelector(".todolist");

addbutton.addEventListener("click",addtodo)
todolist.addEventListener("click",deletedone)

function addtodo(e){
    console.log("i m pressed");

    e.preventDefault();

    const todos=document.createElement('div');
    todos.classList.add('todos');

    const todoitem=document.createElement('Li');
    todoitem.innerText=todoinput.value;
    todoitem.classList.add('todoitem');
    todos.appendChild(todoitem)

    const markdonebutton=document.createElement('button');
    markdonebutton.innerText="tick";
    markdonebutton.classList.add('doneb');
    todos.appendChild(markdonebutton)

    const deletebutton=document.createElement('button');
    deletebutton.innerText="delete";
    deletebutton.classList.add("deleteb");
    todos.appendChild(deletebutton)

    todolist.appendChild(todos);
    todoinput.value="";
   
    
}

function deletedone(e){
    e.preventDefault();

    const item= e.target;

    if(item.classList[0] === 'deleteb'){
        const todo = item.parentElement;
        todo.remove();
    }
    if(item.classList[0]==='doneb'){
        const todo =item.parentElement;
        todo.classList.toggle("completed");
        console.log("done");
        
    }
}