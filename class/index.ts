import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

const Stop = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
    })
}


async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`Let's Start University Project`);
    await Stop();
    rainbowTitle.stop();
}


await welcome();


class Universities {
    names: string[];

}