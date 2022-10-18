const text = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const saveBtn = document.getElementById("saveBtn");
const listBox = document.getElementById("listBox");
const saveIndex = document.getElementById("saveIndex");

let todoItems = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let todoList = localStorage.getItem("todoList");

  if (todoList === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(todoList);
  }

  todoItems.push(text.value);
  text.value = "";
  localStorage.setItem("todoList", JSON.stringify(todoItems));
  display();
});

function display() {
  let todoList = localStorage.getItem("todoList");

  if (todoList === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(todoList);
  }

  let htmlCode = "";

  todoItems.forEach((list, index) => {
    htmlCode += `
        <div class="flex mb-4 items-center">
            <p class="w-full text-grey-darkest">${list}</p>
            <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-grey bg-green-600" onclick="editTodo(${index})">Edit</button>
            <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500" onclick="deleteTodo(${index})">delete</button>
        </div>`;
  });
  listBox.innerHTML = htmlCode;
}

function deleteTodo(index) {
  let todoList = localStorage.getItem("todoList");
  todoItems = JSON.parse(todoList);
  todoItems.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(todoItems));
  display();
}

function editTodo(index) {
  saveIndex.value = index;
  let todoList = localStorage.getItem("todoList");
  todoItems = JSON.parse(todoList);
  text.value = todoItems[index];
  addBtn.style.display = "none";
  saveBtn.style.display = "block";
}

saveBtn.addEventListener("click", function () {
  let todoList = localStorage.getItem("todoList");
  todoItems = JSON.parse(todoList);
  let id = saveIndex.value;
  todoItems[id] = text.value;
  addBtn.style.display = "block";
  saveBtn.style.display = "none";
  text.value = "";
  localStorage.setItem("todoList", JSON.stringify(todoItems));
  display();
});

display();
