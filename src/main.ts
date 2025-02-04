import commandLineArgs, { OptionDefinition } from 'command-line-args';

const params: OptionDefinition[] = [
  {
    name: 'item',
    alias: 'i',
    type: String,
  },
  {
    name: 'completed',
    alias: 'c',
    type: Boolean,
  },
  {
    name: 'date',
    alias: 'd',
    type: String,
  },
];
const options = commandLineArgs(params);
const { item = '', completed = false, date = '' } = options;

const items = [];

if (item) {
  items.push({ item, completed, date });
}

// pnpm run start -i "Run morning" -c -d "today"
console.log(items);
