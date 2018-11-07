'use strict';


const api = (function () { 
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sam';
  function getItems (callback) {
    callback('api module works!');
  }
  return {
    getItems,
    BASE_URL
  }



})();