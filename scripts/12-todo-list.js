const todoList = [{
  name: 'hi',
  dueDate: '2022-12-22'
},{
    name: 'bye',
    dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  
  todoList.forEach((todoObject, index) =>{
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  //querySelectorAll to get all the buttons on the page
  //loop through the list w/ forEach to add add click event listener
  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click', ()=>{
      todoList.splice(index, 1);
      renderTodoList();
    })
  });

}

document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{
  addTodo();
})

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInput = document.querySelector('.js-due-date-input');
  const dueDate = dateInput.value;

  todoList.push({
    //name: name, 
    //dueDate: dueDate
    name,
    dueDate,
  });

  inputElement.value = '';
  renderTodoList();
}