document.addEventListener("DOMContentLoaded", () => {
  const div = document.getElementById("create-monster");
  const monCon = document.getElementById("monster-container");

  function loadMonsters(data) {
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h2.innerHTML = "Name: " + data.name;
    h3.innerHTML = "Age: " + data.age;
    p.innerHTML = "Description: " + data.description;
    div.append(h2, h3, p);
  }
  let count = 50;

  fetch(`http://localhost:3000/monsters/?_limit=${count}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((data) => loadMonsters(data));
    });


  const addBtn = document.createElement("button");
  addBtn.innerText = "load 50 more";
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    div.innerHTML = "";
    count = count + 50;
    fetch(`http://localhost:3000/monsters/?_limit=${count}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((data) => loadMonsters(data));
    });
  });
  monCon.append(addBtn);
});
