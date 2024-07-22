// Activity-1: Basic Event Handling:

// Task-1: Add a click event listener to a button that changes the text content of a paragraph.

function changeContent() {
  const textContent = document.getElementById("text");
  const button = document.getElementById("textButton");

  button.addEventListener("click", function () {
    textContent.innerHTML = "New paragraph is generated";
  });
}

// Task-2: Add a double-click event listener to an image that toggles its visibility.

const imageElement = document.getElementById("demoImage");

imageElement.addEventListener("dblclick", function () {
  if (imageElement.style.opacity === "0") {
    imageElement.style.opacity = "1";
  } else {
    imageElement.style.opacity = "0";
  }
});

// Activity-2: Mouse Events:

// Task-3: Add a mouseover event listener to an element that changes its background color.

const boxElement = document.getElementById("box");

boxElement.addEventListener("mouseover", () => {
  boxElement.style.backgroundColor = "red";
});

// Task-4: Add a mouseout event listener to an element that resets its background color.

boxElement.addEventListener("mouseout", () => {
  boxElement.style.backgroundColor = "blue";
});

// Activity-3: Keyboard Events:

// Task-5: Add a keydown event listener to an input field that logs the key pressed to the console.

const newInput = document.getElementById("newInput");

newInput.addEventListener("keydown", (key) => {
  console.log(key);
});

// Task-6: Add a keyup event listener to an input field that displays the current value in the paragraph.

const paraElement = document.getElementById("paraElement");
newInput.addEventListener("keyup", () => {
  paraElement.innerHTML = newInput.value;
});

// Activity-4: Form Events:

// Task-7: Add a submit event listener to a form that represents the default submission and logs the form data to the console.

const newForm = document.getElementById("newForm");

newForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Username: ", newForm.elements.username.value);
  console.log("Email: ", newForm.elements.email.value);
  console.log("Password: ", newForm.elements.password.value);
});

// Task-8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const selectPara = document.getElementById("selectPara");
const tags = document.getElementById("tags");

tags.addEventListener("change", () => {
  selectPara.innerHTML = tags.value;
});

// Activity-5: Event Delegation:

// Task-9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const listPara = document.getElementById("listPara");
const newList = document.getElementById("newList");

newList.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    console.log(e.target.textContent);
    listPara.innerHTML = e.target.textContent;
  }
});

// Task-10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const parent = document.getElementById("parent");
const addButtons = document.getElementById("addButtons");
parent.addEventListener("click", (e) => {
  e.target.tagName == "BUTTON" && alert("Button Clicked");
});
addButtons.addEventListener("click", () => {
  const newButton = document.createElement("button");
  newButton.textContent = "New Button";
  document.getElementById("parent").appendChild(newButton);
});
