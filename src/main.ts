import colors from 'colors';
import commandLineArgs from 'command-line-args';

const params = [{ name: 'name', alias: 'n', type: String }];
const options = commandLineArgs(params);

const myName = options.name || 'Friend';
const hour = new Date().getHours();

if (hour >= 6 && hour < 12) {
  console.log(colors.yellow(`Good morning ${myName}.`));
} else if (hour >= 12 && hour < 18) {
  console.log(colors.green(`Good afternoon ${myName}.`));
} else if (hour >= 18 && hour < 23) {
  console.log(colors.cyan(`Good evening ${myName}.`));
} else {
  console.log(colors.blue(`Good night ${myName}.`));
}
