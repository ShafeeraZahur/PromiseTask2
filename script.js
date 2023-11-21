
function fetchData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        displayUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        displayError(error);
      });
  }
  
  function displayUsers(users) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';
  
    if (users && users.length > 0) {
      const list = document.createElement('ul');
  
      users.forEach((user) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
        list.appendChild(listItem);
      });
  
      dataContainer.appendChild(list);
    } else {
      dataContainer.textContent = 'No users available';
    }
  }
  
  function displayError(error) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.textContent = `Error: ${error.message}`;
  }
  