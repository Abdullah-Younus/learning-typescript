#! /usr/bin/env node
import chalk from 'chalk'
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';

const Stop = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000)
    })
}

async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Lets Start Calculations");
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

await welcome();

async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation are you perform? \n",
            choices: ["Addition", "Subration", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter First Number :",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Second Number :"
        }
    ])
    // console.log('Answers :',answers.num1 + answers.num2);
    if (answers.operator === "Addition") {
        console.log(`${chalk.green(answers.num1, "+", answers.num2, "=", answers.num1 + answers.num2)}`);
    } else if (answers.operator === "Subration") {
        console.log(`${chalk.yellow(answers.num1, "-", answers.num2, "=", answers.num1 - answers.num2)}`);
    } else if (answers.operator === "Multiplication") {
        console.log(`${chalk.red(answers.num1, "*", answers.num2, "=", answers.num1 * answers.num2)}`);
    } else {
        console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
    }
};

// askQuestion()


async function starAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
                type: 'input',
                name: 'restart',
                message: 'Do You Want Play Again ?Press y Or n:'
            })
        if (again.restart == 'n') {
            break;
        }
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'n' || again.restart == 'N')
}


starAgain();

export { }


// login page

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password
            );
            history.push('/');
        } catch {
            setError('Failed to log in');
        }
        setLoading(false);
    }

    return (
        <>
        <Card>
        <Card.Body> 