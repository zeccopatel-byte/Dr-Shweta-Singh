import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace global colors first so we have #0A2463 instead of #011427
content = content.replace(/#011427/g, '#0A2463');
content = content.replace(/#Dc5d46/g, '#FE601C');
content = content.replace(/text-\[\#6091b0\]/g, 'text-[#0A2463]');

// Fix Podcasts component specifically
content = content.replace(
  /<div className="w-full bg-\[\#6091b0\]">([\s\S]*?)<\/div>\n  \);\n\};/g,
  (match, p1) => {
    let replaced = p1
      .replace(/text-white/g, 'text-[#0A2463]')
      .replace(/border-white\/20/g, 'border-[#0A2463]/20')
      .replace(/ring-white\/10/g, 'ring-[#0A2463]/10')
      .replace(/bg-white\/60/g, 'bg-[#0A2463]/60')
      .replace(/bg-white/g, 'bg-[#0A2463]')
      .replace(/border-white\/40/g, 'border-[#0A2463]/40')
      .replace(/group-hover:bg-[#0A2463] group-hover:text-\[\#0A2463\]/g, 'group-hover:bg-[#0A2463] group-hover:text-white') // If it got messed up
      .replace(/group-hover:bg-white group-hover:text-\[\#0A2463\]/g, 'group-hover:bg-[#0A2463] group-hover:text-white') // If it got messed up
      .replace(/bg-\[\#6091b0\]/g, 'bg-[#EDD2E0]')
      .replace(/text-[#0A2463]\/50/g, 'text-[#0A2463]/70') // better contrast
      .replace(/text-[#0A2463]\/30/g, 'text-[#0A2463]/50')
      .replace(/text-\[\#0A2463\] bg-\[\#0A2463\]/g, 'text-white bg-[#0A2463]') // fix button: was bg-white text-[#0A2463], became bg-[#0A2463] text-[#0A2463]
      .replace(/text-\[\#0A2463\]/g, 'text-[#0A2463]') // normalized

    return `<div className="w-full bg-[#EDD2E0]">${replaced}</div>\n  );\n};`;
  }
);

// We still have some bg-[#6091b0] outside Podcasts.
// Like bg-[#6091b0]/80 in App.tsx (Lifestyle pill)
content = content.replace(/bg-\[\#6091b0\]\/80/g, 'bg-[#EDD2E0]');

fs.writeFileSync('src/App.tsx', content);
