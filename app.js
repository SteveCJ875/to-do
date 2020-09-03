let allTodos = [
    { title: `wash car`,
      dueDate: `08-31-2020`,
      description: `wash the car at the car wash`, 
      isComplete: true
    },

    { title: `clean house`,
    dueDate: `08-25-2020`,
    description: `sweep and mop the floors`, 
    isComplete: true
    },

    { title: `pay bills`,
    dueDate: `09-01-2020`,
    description: `pay all bills that are due`, 
    isComplete: true
    },

    { title: `wash clothes`,
    dueDate: `08-26-2020`,
    description: `wash the dirty clothes and hang them after clean`, 
    isComplete: false
    },
];
function createElementFromTodo(todo) {
    // builds an element and returns it//
  let todoElement = $(`<div class="todo">
  <h3><span class="title">${todo.title}</span><span class="due-date">${todo.dueDate}</span></h3>
  <pre>${todo.description}</pre>`)
  
  todoElement.data( `todo`, todo )
  return todoElement


  }
  
  function renderTodos() {
    $(`main.content`).empty();
    // uses allTodos
    allTodos.forEach(function (todo) {
        let toDoElement = createElementFromTodo(todo) //object.keyname//
        if(todo.isComplete){//concluded// 
            $(`.completed-todos`).append(toDoElement)
        }else{
            $(`.pending-todos`).append(toDoElement)
        } //not cocnluded//
            
    })
    
  }


  function createTodoFromForm(){
    let newTodo = { isComplete: false }

    newTodo.title = $(`#todo-title`).val()
    newTodo.description = $(`#todo-description`).val()
    newTodo.dueDate = $(`#todo-due-date`).val()

    return newTodo
  }


  $(`.add-todo`).click(function(event){
    $(`.modal`).addClass(`open`)
  })

  $(`.create-todo`).click(function(event){
    event.preventDefault()
    let newTodo = createTodoFromForm()
    allTodos.unshift(newTodo)
    $(`.modal`).removeClass(`open`)
    
    renderTodos()

    
  })

  $(`.cancel-create-todo`).click(function(event){
    $(`.modal`).removeClass(`open`)
  })

  renderTodos()
  