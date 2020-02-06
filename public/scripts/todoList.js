const subTaskHtml = function(task){
  return `
  <div class="subTask" id="${task.id}">
    <input type="checkbox"><label>${task.taskTitle}</label>
    <button id="clear-button" onclick="clearTask()" 
    <i class="material-icons">clear</i></button>
  </div>`;
};

const updateTitleToHtml = function(todo){
  return `
  <div>
  <button onclick="clearTodo();" id="delete-button"  
    <i class="material-icons">delete_sweep</i></button>
  <label id=${todo.id} class="todo" onclick="renderTask()">${todo.title}</label>
  </div>`;
};

class TodoList{
  constructor(todoList){
    this.todoList = todoList;
  }
  
  static load(content){
    const list = JSON.parse(content);
    return new TodoList(list);
  }
  
  titleToHtml(){
    const reverseContent = this.todoList.slice().reverse();
    return reverseContent.map(updateTitleToHtml).join('');
  }

  tasksToHtml(id){
    const todo = this.todoList.find((todo) => todo.id === id);

    const htmlForTasks = `
    <div class="subTask">
    <input id="subTask-title" 
    type="text" placeholder = "Enter subTask..." required>
    <button onclick="addSubTask();" id="create-button"
     type="button" <i class="material-icons">add</i></button>
    </div>
    `;

    const html = todo.tasks ?
      todo.tasks.map((task) => subTaskHtml(task)).join('') : '';

    return htmlForTasks + html;
  }
}
