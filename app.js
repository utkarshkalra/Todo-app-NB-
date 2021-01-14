const todoinput=document.querySelector(".inputtodo");
const addbutton=document.querySelector(".addtodo");
const todolist=document.querySelector(".todolist");


addbutton.addEventListener("click",addtodo)

todolist.addEventListener("click",deletedone)

function addtodo(e){
    console.log("i m pressed");

    e.preventDefault();

    // const todos=document.createElement('div');
    // todos.classList.add('todos');

    const todoitem=document.createElement('Li');
    todoitem.classList.add('todoitem');
    todolist.appendChild(todoitem)

    const todotext=document.createElement('p');
    todotext.classList.add('todotext');
    todotext.innerText=todoinput.value;
    todoitem.appendChild(todotext)


    const markdonebutton=document.createElement('button');
    markdonebutton.innerHTML='<i class="fas fa-check-square"></i>';
    markdonebutton.classList.add('doneb');
    todoitem.appendChild(markdonebutton)

    const deletebutton=document.createElement('button');
    deletebutton.innerHTML='<i class="fas fa-trash-alt"></i>';
    deletebutton.classList.add("deleteb");
    todoitem.appendChild(deletebutton)

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