// Activity-1: Selecting and Manipulating elements:

// Task-1: Select an HMTL element by its ID and change its text content.

document.getElementById("greeting").innerHTML = "Welcome, Hello there!";

// Task-2: Select an HTML element by its class and change its background color.

document.querySelector(".box").style.backgroundColor = "yellow";

// Activity-2: Creating and Appending elements:

// Task-3: Create a new "div" element with some text content and append it to body.

const newElement = document.createElement("div");
newElement.innerHTML = "Javascript is great!";
document.body.appendChild(newElement);

// Task-4: Create a new "li" element and add it to existing "ul" list.

const newListElement1 = document.createElement("li");
const newListElement2 = document.createElement("li");
newListElement1.innerHTML = "Saturday";
newListElement2.innerHTML = "Sunday";
document.querySelector("ul").appendChild(newListElement1);
document.querySelector("ul").appendChild(newListElement2);

// Activity-3: Removing Elements:

// Task-5: Select and HTML element and remove it from the DOM.

const box = document.querySelector(".box");
box.remove();

// Task-6: Remove the last child of a specific HTML element.

const ulElement = document.querySelector("ul");
ulElement.lastChild.remove();

// Activity-4: Modifying Attributes and Classes:

// Task-7: Select and HTML element and change one of its attributes (e.g. "src" of an "img" tag).

const imageElement = document.querySelector("img");
imageElement.setAttribute("src", "../../../Downloads/Naruto 4k_HD.jpeg");
imageElement.setAttribute("alt", "Naruto Image");

// Task-8: Add and remove a CSS class to/from an HTML element.

const taskElement = document.querySelector("ul");
taskElement.classList.add("blue");

imageElement.classList.remove("red");

// Activity-5: Event Handling:

// Task-9: Add a click event listener to a button that changes the text content of a paragraph.

function changeTextContent() {
  const textElement = document.querySelector(".randomText");
  textElement.innerHTML =
    "Welcome, you have successfully generated a new paragraph";
}

// Task-10: Add a mouseover event listener to an element that changes its border color.

const borderElement = document.querySelector(".changeBorder");
borderElement.addEventListener("mouseover", function () {
  borderElement.style.borderColor = "red";
});
