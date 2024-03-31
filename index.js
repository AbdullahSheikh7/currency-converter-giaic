#!/usr/bin/env node
import inquirer from "inquirer";
let currencies = {
    USD: 278.25,
    EUR: 301.64,
    INR: 3.34,
};
const main = async () => {
    let user = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "How much PKR do you want to convert?",
        },
        {
            name: "currency",
            type: "list",
            message: "What currency do you want to convert?",
            choices: Object.keys(currencies),
        },
    ]);
    console.log(`${user.amount} PKR is ${user.amount * currencies[user.currency]} ${user.currency}\n`);
};
do {
    await main();
} while (true);
