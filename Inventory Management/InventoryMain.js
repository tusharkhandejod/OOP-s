const Inventory = require('./InventoryLogic');
let invent = new Inventory();
invent.jsonParse('./InventoryManagement.json');
invent.display();
invent.value();