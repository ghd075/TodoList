const showTodo = document.querySelector('#change');
const modalTodo = document.querySelector('main');

const toDoList = document.querySelector('#todo-list');
const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');

const stateAll = document.querySelector('.state_all');
const stateDone = document.querySelector('.state_done');
const stateLeft = document.querySelector('.state_left');

const totalCountSpan = document.querySelector('.all_text');
const completedCountSpan = document.querySelector('.done_text');
const incompleteCountSpan = document.querySelector('.left_text');


const TODO_KEY = 'todo-key';
let todoList = [];

function saveToDos(){
    localStorage.setItem(TODO_KEY,JSON.stringify(todoList))
}

function deleteToDo(event){
    const li = event.target.parentElement;
    todoList = todoList.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
    updateCounts();
    filterTodo(currentFilter);
}

function checkToDo(event){
    const li = event.target.parentElement;
    const spanTag = li.querySelector('span');
    const checkBtn = event.target;
    const todo = todoList.find((toDo) => toDo.id === parseInt(li.id));

    if(todo) {
        todo.done = !todo.done;
        if(todo.done){
            spanTag.style.textDecoration = 'line-through';
            spanTag.style.textDecorationColor = 'red';
            checkBtn.style.backgroundColor = 'gray';
            checkBtn.style.opacity = '0.5';
            event.target.innerText = '↩';
        } else {
            spanTag.style.textDecoration = '';
            spanTag.style.textDecorationColor = '';
            checkBtn.style.backgroundColor = '';
            event.target.innerText = '✔';
        }
    }
    saveToDos();
    updateCounts();
    filterTodo(currentFilter);
}


function paintToDo(newToDo){
    const liTag = document.createElement('li');
    liTag.id = newToDo.id;
    const spanTag = document.createElement('span')
    spanTag.innerText = newToDo.text;

    const checkBtn = document.createElement('button')
    checkBtn.innerText = '✔';
    checkBtn.style.color = 'green';
    checkBtn.addEventListener('click',checkToDo)

    const button = document.createElement('button')
    button.addEventListener('click', deleteToDo)
    button.innerText =  "❌";

    liTag.appendChild(spanTag);
    liTag.appendChild(checkBtn);
    liTag.appendChild(button);
    toDoList.appendChild(liTag);
}


function handleTodoSubmit(event){
    event.preventDefault();
    if(toDoInput.value.length === 0){
        alert('할 일을 적어주세요!');
    }else{
        const todoText = toDoInput.value;
        if (todoList.some((toDo) => toDo.text === todoText)) {
            alert('이 할 일은 이미 추가되었습니다!');
            toDoInput.value = '';
            return;
        }
        toDoInput.value = '';
        const newToDoObj ={
            id: Date.now(),
            text: todoText,
            done: false
        }
        todoList.push(newToDoObj);
        paintToDo(newToDoObj);
        saveToDos();
        updateCounts();
        filterTodo(currentFilter);
    }
    
}

function updateCounts(){
    const totalCount = todoList.length;
    const completedCount = todoList.filter(toDo => toDo.done).length;
    const incompleteCount = totalCount - completedCount;

    totalCountSpan.innerText = totalCount;
    completedCountSpan.innerText = completedCount;
    incompleteCountSpan.innerText = incompleteCount;
}

function filterTodo(filter) {
    const allItems = toDoList.querySelectorAll('li');
    allItems.forEach(item => {
        const todo = todoList.find(toDo => toDo.id === parseInt(item.id));
        if (filter === 'all') {
            item.style.display = 'flex';
        } else if (filter === 'done' && todo.done) {
            item.style.display = 'flex';
        } else if (filter === 'left' && !todo.done) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
    // 글자색 반전
    if (filter === 'all') {
        stateAll.classList.add('active');
        stateDone.classList.remove('active');
        stateLeft.classList.remove('active');
    } else if (filter === 'done') {
        stateAll.classList.remove('active');
        stateDone.classList.add('active');
        stateLeft.classList.remove('active');
    } else if (filter === 'left') {
        stateAll.classList.remove('active');
        stateDone.classList.remove('active');
        stateLeft.classList.add('active');
    }   
}

let currentFilter = 'all';

stateAll.addEventListener('click', () => {
    currentFilter = 'all';
    filterTodo('all');
});

stateDone.addEventListener('click', () => {
    currentFilter = 'done';
    filterTodo('done');
});

stateLeft.addEventListener('click', () => {
    currentFilter = 'left';
    filterTodo('left');
});


toDoForm.addEventListener('submit',handleTodoSubmit);


const savedToDos = localStorage.getItem(TODO_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    todoList = parsedToDos;
    parsedToDos.forEach(paintToDo);
    updateCounts();
}

let isModal = true;
function handleModalChange(){
    if(isModal){
    modalTodo.classList.remove('hide');
    showTodo.innerText = 'Hide \nTodo List';
    isModal = false;
    }else{
    modalTodo.classList.add('hide');
    showTodo.innerText = 'Show \nTodo List';
    isModal = true;
    }
}

showTodo.addEventListener('click', handleModalChange)