'use strict';

/*global $ */

function renderShoppingList() {
  //this function will render the shopping list to the DOM
  console.log('`renderShoppingList` ran');
}

function handleNewItemSubmit() {
  //this function will be for when users add a new item
  console.log('handleNewItemSubmit ran');
}

function handleItemCheckClicked() {
  //this function will be responsible for when user
  //click the "check" button on an item in the shopping list
  console.log('handleItemCheckClicked ran');
}

function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list
  // item
  console.log('`handleDeleteItemClicked` ran');
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

$(handleShoppingList);