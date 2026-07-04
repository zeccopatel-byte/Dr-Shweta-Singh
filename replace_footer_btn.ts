import fs from 'fs';

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

appContent = appContent.replace(
  /bg-white text-\[\#0A2463\] pl-6 pr-1\.5 py-1\.5 rounded-full font-bold text-xs tracking-widest hover:bg-white\/90/g,
  'bg-[#FE601C] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold text-xs tracking-widest hover:bg-[#FE601C]/90'
);

appContent = appContent.replace(
  /<div className="bg-\[\#0A2463\] rounded-full p-2 group-hover:scale-110 transition-transform">\s*<ArrowRight className="w-3\.5 h-3\.5 text-white" \/>/g,
  '<div className="bg-white rounded-full p-2 group-hover:scale-110 transition-transform">\n                  <ArrowRight className="w-3.5 h-3.5 text-[#FE601C]" />'
);

fs.writeFileSync('src/App.tsx', appContent);
