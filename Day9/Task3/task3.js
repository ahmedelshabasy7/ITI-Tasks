function fetchUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users", true);
    xhr.setRequestHeader("x-api-key", "reqres-free-v1"); 

    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            const users = response.data;
            displayUsers(users);
        }
    }

    xhr.send();
}

function displayUsers(users) {
    const userList = document.getElementById("userData");
    userList.innerHTML = ""; 

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        userCard.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name}">
            <h4>${user.first_name} ${user.last_name}</h4>
            <p>${user.email}</p>
        `;
        userList.appendChild(userCard);
    });
}
