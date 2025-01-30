import colors from 'colors';

const args = process.argv.slice(2);
const [myName = 'Friend'] = args
const hour = new Date().getHours();

if (hour >= 6 && hour < 12) {
    console.log(colors.yellow(`Good morning ${myName}.`));
} else if (hour >=12 && hour < 18) {
    console.log(colors.green(`Good afternoon ${myName}.`));
} else if (hour >= 18 && hour < 23) {
    console.log(colors.cyan(`Good evening ${myName}.`));
} else {
    console.log(colors.blue(`Good night ${myName}.`));
}
