document.addEventListener('DOMContentLoaded', () => {

const newItemform = document.querySelector('.member-form');
newItemform.addEventListener('submit',handleNewItemFormSubmit);

const deleteAllButton = document.querySelector('#delete-all');
deleteAllButton.addEventListener('click',handleDeleteAllButton);

// closes DOMContentLoaded:
});


const handleNewItemFormSubmit = function(event){
  event.preventDefault();

  const playersListItem = createPlayersListItem(event.target);
  const playersList = document.querySelector('#players-list');
  playersList.appendChild(playersListItem);

  event.target.reset();
}

const createPlayersListItem = function(form){
  const playersListItem = document.createElement('li');
  playersListItem.classList.add('players-list-item');

  const first_name = document.createElement('h3');
  first_name.textContent = form.first_name.value;
  playersListItem.appendChild(first_name);

  const last_name = document.createElement('h3');
  last_name.textContent = form.last_name.value;
  playersListItem.appendChild(last_name);

  const speciality = document.createElement('p');
  speciality.textContent = form.speciality.value;
  playersListItem.appendChild(speciality);

  const inspired_by = document.createElement('p');
  inspired_by.textContent = form.inspired_by.value;
  playersListItem.appendChild(inspired_by);

  return playersListItem;
}

const handleDeleteAllButton = function(event){
  const playersList = document.querySelector('#players-list');
  playersList.innerHTML = '';
}
