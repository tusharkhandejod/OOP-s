const fs = require('fs');
class StockManagement {

    constructor() {
        this.content = null;
        this.fileName = null;
    }

    //It reads json file from given adress and convert it to script object.
    jsonParse(fileName) {
        this.fileName = fileName;
        this.content = JSON.parse(fs.readFileSync(fileName));

    }

    printReport() {
        console.log(this.content);
    }


    //it calculate value of Compnay's stock
    value() {
        let stockSum = 0;

        this.content.Stock.forEach(element => {
            return stockSum = stockSum + element.Price * element.numberOfShares;
        });

        this.content.Stock.forEach(element => {
            return console.log('For ' + element.Name + ' compnay total stock price is : ' + element.Price * element.numberOfShares + ' RS');
        });

    }

    //It convert script object and save it to json file.
    save() {
        fs.writeFileSync(this.fileName, JSON.stringify(this.content), );
    }
}

// exporting class
module.exports = StockManagement;