const itemName = document.getElementById("item-name");
const addItem = document.getElementById("add-item");
const myList = document.getElementById("myList");
let count = 0;

addItem.addEventListener("click", () => {
  if (itemName.value.trim() === "") {
    const enterItem = document.createElement("p");
    enterItem.innerText = "Please enter task name";
    enterItem.classList.add("notify");
    myList.appendChild(enterItem);
    setTimeout(() => myList.removeChild(enterItem), 1000);
  } else {
    count++;
    const newItem = document.createElement("li");
    newItem.innerHTML = `
        ${count}. ${itemName.value}
        <button class="del-btn">Delete</button>
      `;
    newItem.classList.add("items");
    myList.appendChild(newItem);
    itemName.value = "";

    const delBtn = newItem.querySelector(".del-btn");
    delBtn.addEventListener("click", () => {
      myList.removeChild(newItem);
      delBtn.classList.add("del-btn");
      count--;
    });
  }
});
