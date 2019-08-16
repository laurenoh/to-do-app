function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id,
    });
    id = id + 1;
    newToDoText.value = '';
    renderTheUI();
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('button');
      newLi.id = toDo.id;
      deleteButton.addEventListener('click', event => {
        newLi.parentNode.removeChild(newLi);
        toDos = toDos.filter(toDo => toDo.id !== parseInt(newLi.id));
        return false;
      })
      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;
      deleteButton.innerHTML = "Delete";
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });
  }
  renderTheUI();
}
window.onload = function() {
  onReady();
 }
