import fs from 'fs';
import path from 'path';
import commandLineArgs, { OptionDefinition } from 'command-line-args';

const filename = 'data.json';
const filepath = `${path.resolve('.')}/${filename}`;

let content;
try {
  content = fs.readFileSync(filepath, 'utf-8');
} catch (err) {
  content = '[]';
}

const items = JSON.parse(content);

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

if (item) {
  items.push({ item, completed, date });
  fs.writeFileSync(filepath, JSON.stringify(items, null, 2));
}

// pnpm run start -i "Run morning" -c -d "today"
console.log(items);
