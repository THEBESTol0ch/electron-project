const addUserBtn = document.getElementById('addUserBtn');
const formContainer = document.getElementById('formContainer');
const userForm = document.getElementById('userForm');
const usersTableBody = document.querySelector('#usersTable tbody');

let users = [];

addUserBtn.addEventListener('click', () => {
  formContainer.classList.toggle('hidden');
});

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  if (name && age) {
    users.push({ name, age });
    updateTable();
    userForm.reset();
    formContainer.classList.add('hidden');
  }
});

function updateTable() {
  usersTableBody.innerHTML = '';
  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${user.name}</td><td>${user.age}</td>`;
    usersTableBody.appendChild(row);
  });
}
