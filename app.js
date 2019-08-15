function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault ();
    // get the newToDoText
    let title = newToDoText.value;
    // create a new li
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');
    // create delete button
    let deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', event => {
    newLi.parentNode.removeChild(newLi);
    return false;
    })
    // set the input's type to checkbox
    checkbox.type = "checkbox";
    deleteButton.innerHTML = "Delete";
    newLi.style.fontSize = "medium";
    newLi.style.fontFamily = "Impact,Charcoal,sans-serif";
    // set the title
    newLi.textContent = title;
    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    //attach the delete button to the li
    newLi.appendChild(deleteButton);
    // attach the li to the ul
    toDoList.appendChild(newLi);
    // empty the input
    newToDoText.value = '';
  });
}


window.onload = function() {
   onReady ();
 };