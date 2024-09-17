const { getTest, getItem, createItem, scanList, deleteItem, setPurchased } = require('./dao.js');
const { logger } = require('./logger.js');

const http = require('http');

const testItem = {grocery: "fish", price: 2.4, purchased: false, count: 2};

//scanList();
//deleteItem("ca803ede-93c6-4b95-8354-4515fd849399");
//setPurchased("e415d5c9-e946-4061-bcd9-c7fbf0e57e6d");