const getDetails = (elem) => {
  const userTab = document.getElementById("user_" + elem.id);
  userTab.addEventListener("click", (e) => {
    const id = e.target.id.substring(5);
    fetch(`https://isa-simple-rest-api.herokuapp.com/api/users/${id}`).then(response => {
      return response.json();
    }).then(response => {
      document.getElementById("userId").value = response.id;
      document.getElementById("userName").value = response.username;
    });
  });
}

const getList = () => {
  fetch('https://isa-simple-rest-api.herokuapp.com/api/users').then(response => {
    return response.json();
  }).then(response => {
    response.forEach(user => {
      let listItem = document.createElement("li");
      let link = document.createElement("a");

      link.classList.add("nav-link");
      link.appendChild(document.createTextNode(user.username));
      link.id = `user_${user.id}`;
      
      listItem.classList.add("nav-item");
      listItem.appendChild(link);
      
      document.getElementById("myTab").appendChild(listItem);
      getDetails(user);
    })
  });
};

getList();
