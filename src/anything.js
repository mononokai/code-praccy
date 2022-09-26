//    6

// grocery list manager 2.0

const readline = require('readline');



let theList = ["apples", "carrots", "tim", "olive", "purple", "baNaNas"];

// add items
function addItems() {
  let item = "";
  while ((item = prompt("Add an item or enter 'quit' to exit: ")).toLowerCase() != "quit") {
    if (theList.find(e => e.toLowerCase() === item.toLowerCase()) !== undefined) {
      console.log("This item is already in the list.\n");
    }
    else {
      theList.push(item);
      console.log(`${item} has been added to the list`)
    }
  }
    console.log("\n\n");
}

// search items
function searchItems() {
  let itemSearch = "";
  while ((itemSearch = prompt("Enter your item to search or 'quit' to exit: ")).toLowerCase() != "quit") {
    if (theList.find(e => e.toLowerCase() === itemSearch.toLowerCase()) !== undefined) {
      console.log("Found.");
    }
    else {
      console.log("Not found.");
    }
  }
    console.log("\n\n");
}

// remove items
function removeItems() {
  let item = "";
  while ((item = prompt("Enter your item to remove or 'quit' to exit: ")).toLowerCase() != "quit") {
    let itemRemoval = theList.find(e => e.toLowerCase() === item.toLowerCase());
    if (itemRemoval !== undefined) {
      console.log(`${item} has been removed\n`);
      theList.splice(theList.indexOf(itemRemoval), 1);
    }
    else {
      console.log("This item is not in the list.\n");
    }
  }
  console.log("\n\n");
}

// print items
function printList() { ///////////////// number these bitties ///////////
  for (listNum = 0; listNum < theList.length; listNum++) {
    console.log(`${listNum + 1}. ${theList[listNum]}`);
  }
  console.log("\n\n");
}


function groceryList() {
  let userSelection = Number(prompt("Please choose between the following options:\n1. Add items\n2. Search for items\n3. Remove items\n4. Print your grocery list\n5. Exit\n"));
  while (userSelection !== 5) {
    if (isNaN(userSelection) || userSelection < 1 || userSelection > 5) {
      console.log("Invalid selection");
      groceryList();
    }
    else if (userSelection === 1) { // add
      addItems();
    }
    else if (userSelection === 2) { // search
      searchItems();
    }
    else if (userSelection === 3) { // remove
      removeItems();
    }
    else if (userSelection === 4) { // print
      printList();
    }
    else {
      console.log("Invalid selection");
      groceryList();
    }
    userSelection = Number(prompt("Please choose between the following options:\n1. Add items\n2. Search for items\n3. Remove items\n4. Print your grocery list\n5. Exit\n"));
  }
 console.log("Bye bye :* love you");
}


console.log("Welcome to your newest favorite grocery list maker!");

groceryList();

