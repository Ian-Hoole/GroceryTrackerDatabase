const {getTest, getItem, createItem} = require('./dao.js');
const {logger} = require('./logger.js');

const http = require('http');

const testItem = {grocery: "fish", price: 2.4, purchased: false, count: 2};
