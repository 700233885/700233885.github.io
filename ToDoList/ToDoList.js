const input = document.querySelector('input')
const button = document.querySelector('button')
const todoList = document.querySelector(".todo-list")

const renderTodos = () => {
    todos = JSON.parse(localStorage.getItem('todo-list')) || []
    todoList.innerHTML = ''

    todos.forEach(todo => { 
        const li = document.createElement('li');
        li.textContent = todo.text;
        todoList.append(li);
    });
}

renderTodos()

button.addEventListener('click',() =>{
    todos.push({ text: input.value, completed: false })
    localStorage.setItem('todo-list', JSON.stringify(todos))
    renderTodos()
})