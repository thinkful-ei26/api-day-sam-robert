'use strict'
/* global shoppingList, store, api*/

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
  api.getItems((items) => {
    const item = items[0];
  
    api.updateItem(item.id, { name: 'boardski' }, () => {
      console.log('updated!');
    });
  });
});



