#!usr/bin/env node
import inquirer from 'inquirer';
async function guess() {
    const machineguess = Math.floor(Math.random() * 60);
    console.log('Machine Guess', machineguess);
    console.log('Weclome Guessing Number');
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "number",
            message: "Enter Number:"
        }
    ]);
    console.log('Answer :', answer);
}
guess();
