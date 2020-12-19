fs = require('fs');

class Inventory {

    constructor() {
        this.content = null;
        this.fileName = null;
    }

    //It reads json file from given adress and convert it to script object.
    jsonParse(fileName) {
        this.fileName = fileName;
        this.content = JSON.parse(fs.readFileSync(fileName));

    }

    display() {
        console.log(this.content.Grains);
    }


    //It calculate value of inventory
    value() {
        let total = 0;
        let riceSum = 0;
        this.content.Grains.Rice.forEach(element => {
            return riceSum = riceSum + element.Price * element.Weight;
        });

        let wheatSum = 0;
        this.content.Grains.Wheat.forEach(element => {
            return wheatSum = wheatSum + element.Price * element.Weight;
        });

        let pulsesSum = 0;
        this.content.Grains.Pulse.forEach(element => {
            return pulsesSum = pulsesSum + element.Price * element.Weight;
        });

        total = riceSum + wheatSum + pulsesSum;
        console.log('Total value of Rice : ' + riceSum + " RS");
        console.log('Total value of Wheat : ' + wheatSum + " RS");
        console.log('Total value of Pulses : ' + pulsesSum + " Rs");
        console.log('Total value of all Inventories : ' + total + " RS");
    }

    saveFile() {
        fs.writeFile(this.fileName, JSON.stringify(this.content));
    }
}

module.exports = Inventory;