import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/className="font-serif text-2xl font-bold text-\[\#0A2463\] mb-2"/g, 'className="font-serif text-2xl font-bold text-[#FE601C] mb-2"');
fs.writeFileSync('src/App.tsx', content);
