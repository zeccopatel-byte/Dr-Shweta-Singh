import fs from 'fs';
import path from 'path';

function walkDir(dir: string, callback: (filepath: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('./src', function(filepath) {
  if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
    let content = fs.readFileSync(filepath, 'utf8');
    let original = content;

    // 1. Text hover backgrounds:
    // from: text-[#0A2463] bg-transparent group-hover:bg-[#0A2463] group-hover:text-white
    // (and the one that mistakenly has group-hover:text-[#0A2463])
    content = content.replace(/group-hover:bg-\[\#0A2463\] group-hover:text-(white|\[\#0A2463\])/g, 'group-hover:bg-[#FE601C] group-hover:text-white');

    // 2. Main buttons that use bg-jewel-teal
    // We replace bg-jewel-teal text-white with bg-[#FE601C] text-white
    content = content.replace(/bg-jewel-teal text-white/g, 'bg-[#FE601C] text-white');
    content = content.replace(/hover:bg-jewel-teal\/90/g, 'hover:bg-[#FE601C]/90');
    // And their inner arrows text-jewel-teal -> text-[#FE601C]
    content = content.replace(/className="w-4 h-4 text-jewel-teal"/g, 'className="w-4 h-4 text-[#FE601C]"');
    content = content.replace(/className="w-3.5 h-3.5 text-jewel-teal"/g, 'className="w-3.5 h-3.5 text-[#FE601C]"');

    // 3. Other buttons that were explicitly bg-[#0A2463] text-white (Play Episode, Listen All)
    // "Listen all" is a Link, "Play Episode" is a button. "Play" icons might be a button.
    content = content.replace(/bg-\[\#0A2463\] text-white/g, 'bg-[#FE601C] text-white');
    content = content.replace(/hover:bg-\[\#0A2463\]\/90/g, 'hover:bg-[#FE601C]/90');
    content = content.replace(/hover:bg-\[\#0A2463\]\/80/g, 'hover:bg-[#FE601C]/80');

    // Make sure we didn't miss the footer arrows or anything else.
    // If a button was outline:
    // border border-[#0A2463] text-[#0A2463] hover:bg-[#0A2463] hover:text-white
    // Should we change it to FE601C? The prompt says "all cta links". Those are filter links (Load more/filters)
    // Let's do it just in case:
    content = content.replace(/border-\[\#0A2463\] text-\[\#0A2463\].*?hover:bg-\[\#0A2463\] hover:text-white/g, (match) => {
        return match.replace(/border-\[\#0A2463\]/g, 'border-[#FE601C]')
                    .replace(/text-\[\#0A2463\]/g, 'text-[#FE601C]')
                    .replace(/hover:bg-\[\#0A2463\]/g, 'hover:bg-[#FE601C]');
    });
    
    // There's a button with inner circle bg-[#0A2463] that on hover goes bg-white.
    // `<div className="w-9 h-9 rounded-full bg-[#0A2463] flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">`
    content = content.replace(/rounded-full bg-\[\#0A2463\].*?group-hover:bg-white/g, (match) => {
       return match.replace(/bg-\[\#0A2463\]/, 'bg-[#FE601C]');
    });

    if (content !== original) {
      fs.writeFileSync(filepath, content, 'utf8');
      console.log(`Updated ${filepath}`);
    }
  }
});
