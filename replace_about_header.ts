import fs from 'fs';

let content = fs.readFileSync('src/pages/AboutPage.tsx', 'utf8');

content = content.replace(/className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-\[1\.2\] text-\[\#0A2463\] text-center/g, 'className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-[#FE601C] text-center');

fs.writeFileSync('src/pages/AboutPage.tsx', content);
