'use strict'
/* global shoppingList, store, api*/

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));


api.createItem('pears', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
});