#!usr/bin/env node
import chalk from 'chalk'
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';

const Stop = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
    })
}


async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets Start Calculations');
    await Stop();
    rainbowTitle.stop();
    console.log(`
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `);

}

welcome();

async function askQuestion() {
    inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices: ['+ Addition', '- Subtraction', '* Multiplication', '/ Division']
        },
        {
            type: "number",
            name: "num1",
            message: 'Enter First Number :'

        },
        {
            type: "number",
            name: "num2",
            message: "Enter Second Number :"
        }
    ]).then((answer) => {
        console.log(answer);

    })
}

askQuestion()


export { }