const toDoList = document.getElementById("todo-list-ul")
const toDoInput = document.getElementById("todo-input-text");
const toDoInputBtn = document.getElementById("todo-input-btn");
const allRemove = document.getElementById("todo-remove-btn");

// 할 일 목록을 화면에 만드는 함수
const addToDo = () => {
    const toDoListItem = document.createElement("li");
    const completeBtn = document.createElement("button");

    toDoListItem.textContent = toDoInput.value;
    completeBtn.textContent = "완료";

    toDoListItem.classList.add("todo-list-item");
    completeBtn.classList.add("todo-list-complete");

    toDoList.appendChild(toDoListItem);
    toDoListItem.appendChild(completeBtn);
    
    completeItem(completeBtn);
}

// 할 일을 완료한 후 '완료' 버튼을 누르면 취소선을 긋는 함수
const completeItem = (completeBtn) => {
    completeBtn.addEventListener("click", () => {
        completeBtn.parentNode.style.textDecoration = "line-through";
    })
}

// '+' 버튼을 누르면 할 일 목록을 아래에 생성한다
toDoInputBtn.addEventListener("click", () => {
    if(toDoInput.value.trim().length === 0) {   // 입력값이 없으면 내용을 입력하르는 alert창을 띄운다
        return alert("내용을 입력하세요");
    }
    addToDo();

    toDoInput.value = "";                       // 입력값 초기화
    toDoInput.focus();
});

// '모두 삭제' 버튼을 누르면 모든 목록을 삭제한다
allRemove.addEventListener("click", () => {
    toDoList.replaceChildren();
});