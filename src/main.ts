const args = process.argv.slice(2);
const [myName = 'Friend'] = args
const hour = new Date().getHours();

if (hour >= 6 && hour < 12) {
    console.log(`Good morning ${myName}`);
} else if (hour >=12 && hour < 18) {
    console.log(`Good afternoon ${myName}`);
} else if (hour >= 18 && hour < 23) {
    console.log(`Good evening ${myName}`);
} else {
    console.log(`Good night ${myName}`);
}
