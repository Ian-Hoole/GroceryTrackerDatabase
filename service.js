const { getTest, getItem, createItem, scanList, deleteItem, setPurchased } = require('./dao.js');
const { logger } = require('./logger.js');

const testItem = { grocery: "fish", price: 2.4, purchased: false, count: 2 };

function serviceGetTest(){
    return getTest();
}

function serviceGetItem(str) {
    return getItem(str);
}

function serviceCreateItem(grocery, price, purchased, count){
    return createItem({grocery, price, purchased, count});
}

function serviceGetList(){
    return scanList();
}

function serviceDeleteItem(id){
    deleteItem(id);
}

function serviceSetPurchased(id){
    setPurchased(id)
}

module.exports = {
    serviceGetTest,
    serviceGetItem,
    serviceCreateItem,
    serviceGetList,
    serviceDeleteItem,
    serviceSetPurchased
}