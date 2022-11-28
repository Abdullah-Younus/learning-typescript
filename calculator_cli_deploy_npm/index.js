#!usr/bin/env node
import chalkAnimation from 'chalk-animation';
const Stop = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets Start Calculations');
    await Stop();
    rainbowTitle.stop();
}
welcome();
