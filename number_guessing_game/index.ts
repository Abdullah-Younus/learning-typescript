#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalAnimation from 'chalk-animation';

const sleep = (time = 2000) => new Promise((resovle, reject) => setTimeout(resovle, time));

async function weclome() {
    const rainbowTitle = chalAnimation.rainbow("Let's Play Guessing Game");
    await sleep();
    rainbowTitle.stop();
}

// await weclome();

let playerLife: number = 3;

async function askQuestion() {
    let random_number: number = Math.floor(Math.random() * 10 + 1); // ya math.random 0 sa 1 tak kae bech ma number deta han hum nai multiply kae kar isko 10 tak kara han
    console.log('Random Number :', random_number);
    console.log(`First Attemp Three Chance ${playerLife}`);
    do {
        playerLife--;
        var question = await inquirer.prompt([
            {
                type: "input",
                name: "usr_num",
                message: "Select any random number between 1 to 10:",
                validate: (answer: number) => {
                    if (isNaN(answer)) {
                        return chalk.red(`Please Enter valid number  ${answer}`)
                    }
                    return true;
                }
            }
        ]);
        if (question.usr_num == random_number) {
            console.log(chalk.green('Congratulation! You Guess the Right Number !'));
            break;

        }
        else if (question.usr_num < random_number) {
            console.log(chalk.red(`Your Number :${question.usr_num} is less then machine number :${random_number}`));
        }
        else if (question.usr_num > random_number) {
            console.log(chalk.yellowBright(`Your Number :${question.usr_num} is greater then machine number :${random_number}`));
        }
    } while (playerLife > 0 && random_number !== question.usr_num)
    if (playerLife == 0 && random_number !== question.usr_num) {
        console.log(chalk.bgRed(`Game Over`));
    }

}
// await askQuestion();


async function startAgain() {
    do {
        await weclome();
        playerLife = 3;
        await askQuestion();
        var restart = await inquirer.prompt([
            {
                type: "input",
                name: 'start_again',
                message: "Do You Want To Play Again!Press y or n :"
            }
        ]);
        if (restart.start_again === 'n' || restart.start_again === 'N') {
            break;
        }
    } while (restart.start_again === 'y' || restart.start_again === 'n' || restart.start_again === 'Y' || restart.start_again === 'N')
}
await startAgain();
