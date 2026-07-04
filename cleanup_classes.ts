import fs from 'fs';

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

appContent = appContent.replace(
  /bg-jewel-teal/g,
  'bg-[#0A2463]'
);

fs.writeFileSync('src/App.tsx', appContent);

let indexContent = fs.readFileSync('src/index.css', 'utf8');
indexContent = indexContent.replace(
  /--color-jewel-teal: #0A2463;\n/g,
  '--color-jewel-teal: #0A2463;\n'
);
fs.writeFileSync('src/index.css', indexContent);
