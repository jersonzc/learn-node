import fs from 'fs';
import path from 'path';
import commandLineArgs, { OptionDefinition } from 'command-line-args';
import commandLineUsage from 'command-line-usage';

const sections = [
  {
    header: 'My app',
    content: 'Yet another TODO list.',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'item',
        alias: 'i',
        description: 'The task.',
        type: String,
      },
      {
        name: 'completed',
        alias: 'c',
        description: 'Task status.',
        type: Boolean,
        defaultOption: false,
      },
      {
        name: 'date',
        alias: 'd',
        description: 'Date of completion.',
        type: String,
        defaultOption: '',
      },
    ],
  },
];
const usage = commandLineUsage(sections);

console.log(usage);

const filename = 'data.json';
const filepath = `${path.resolve('.')}/${filename}`;

let content = '';
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

for (let index = 0; index < items.length; index++) {
  const element = items[index];
  const checked = element.completed ? '[✓]' : '[ ]';
  const dueDate = element.date ? new Date(element.date) : '';
  const name = element.item;

  console.log(`${index + 1}. ${checked} ${name} [${dueDate}]`);
}
