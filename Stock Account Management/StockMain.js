const readline = require('readline-sync');
const stockAccountManagement = require('./StockManagementLogic');
let stock = new stockAccountManagement();
stock.jsonParse('./StockAccManagement.json');
let flag = true;

while (flag) {
    let choice = readline.questionInt(`\nEnter your choice :  \n1.Print the shares report   \n2.Calculations of stocks    \n3.Exit\n`)
    switch (choice) {

        case 1:
            console.log("\nPrinting the stock report : ");
            stock.printReport();
            break;

        case 2:
            console.log("\nCalculating the stock amount : ")
            stock.value();
            break;

        case 3:
            flag = false;
            process.exit(1);

        default:
            console.log('\nWrong choice');
    }
}