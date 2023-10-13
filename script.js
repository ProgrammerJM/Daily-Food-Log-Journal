// const btnBreakfast = document.querySelector('#btn-breakfast');
// const btnLunch = document.querySelector('#btn-lunch');
// const btnDinner = document.querySelector('#btn-dinner');
// const itemForm = document.getElementById('item-form');
// const itemInput1 = document.getElementById('item-input1');
// const itemInput2 = document.getElementById('item-input2');
// const itemInput3 = document.getElementById('item-input3');
// const itemList1 = document.querySelector('#item-list1');
// const itemList2 = document.querySelector('#item-list2');
// const itemList3 = document.querySelector('#item-list3');
// itemList1.create;

// function onBreakfast(e) {
//   e.preventDefault();

//   // const newItem1 = itemInput1.value.trim();

//   // if (newItem1 === '') {
//   //   alert('Please add a food');
//   //   return;
//   // }
//   onBreakfast(newItem1);
//   addItemToStorage(newItem1);
// }

// function onBreakfast(item) {
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(item));

//   itemList1.appendChild(li);
// }

// function addItemToStorage(item) {
//   const itemFromStorage = getItemsFromStorage();
//   itemFromStorage.push(item);
//   localStorage.setItem('item', JSON.stringify(itemFromStorage));
// }

// function getItemsFromStorage() {
//   let itemFromStorage;

//   if (localStorage.getItem('items') === null) {
//     itemFromStorage = [];
//   } else {
//     itemFromStorage = JSON.parse(localStorage.getItem('items'));
//   }
//   return itemFromStorage;
// }

// function onLunch() {}
// function onDinner() {}
// function onAddItemSubmit(e) {}

// btnBreakfast.addEventListener('submit', onBreakfast);
// btnLunch.addEventListener('submit', onLunch);
// btnDinner.addEventListener('submit', onDinner);
// itemForm.addEventListener('submit', onAddItemSubmit);
// // itemList1.addEventListener('click', onClickItem);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const date = new Date();
let month = months[date.getMonth()];
let day = date.getDate();
let year = date.getFullYear();
document.querySelector('#date').innerHTML = `${month} ${day} ${year}`;

const itemForm1 = document.getElementById('item-form1');
const btnBreakfast = document.querySelector('#btn-breakfast');
const itemList1 = document.getElementById('item-list1');
const itemInput1 = document.getElementById('item-input1');
const clearBtn1 = document.getElementById('clear1');
const dark = document.querySelector('#dark-mode');

// Main submission in breakfast
function onAddItemSubmit1(e) {
  e.preventDefault();

  const newItem1 = itemInput1.value.trim();

  if (newItem1 === '') {
    alert('Please add an item');
    return;
  }
  addItemToDOM(sentenceCase(newItem1));
}
// To make the input text in sentence Case
function sentenceCase(sentence) {
  let string = sentence.toLowerCase().split(' ');
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i][0].toUpperCase() + string[i].slice(1);
  }
  return string;
}
// Adding the list item to the ul
function addItemToDOM(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList1.appendChild(li);
}

// For the list button xmark
function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}
function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}
function checkUI() {
  itemInput1.value = '';

  // const items = itemList1.querySelectorAll('li');
  // if (items.length === 0) {
  //   items.innerHTML = '';
  // }
}
// Removing prompt from list xmark button
function removeItem(item) {
  if (confirm(`Are you sure you want to remove the "${item.textContent}"?`)) {
    item.remove();
  }
  checkUI();
}
// Removing Item from the list of unorderlist
function onClickItem1(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  } else if (e.target.closest('li')) {
  }
}
// Clear function for breakfast
function clearItems1() {
  while (itemList1.firstChild) {
    itemList1.removeChild(itemList1.firstChild);
  }
}
// For Dark Mode
function onDarkMode() {
  let darkMode = document.body;
  darkMode.classList.toggle('dark');
  let container = document.querySelector('.log-component');
  container.classList.toggle('white');
}

itemForm1.addEventListener('submit', onAddItemSubmit1);
clearBtn1.addEventListener('click', clearItems1);
itemList1.addEventListener('click', onClickItem1);
dark.addEventListener('click', onDarkMode);
