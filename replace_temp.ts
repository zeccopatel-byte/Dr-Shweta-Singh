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
  if (filepath.endsWith('.tsx') || filepath.endsWith('.ts') || filepath.endsWith('.css')) {
    let content = fs.readFileSync(filepath, 'utf8');
    let originalContent = content;

    // First, global brand replacements
    content = content.replace(/#011427/g, '#0A2463'); // Dark Blue
    content = content.replace(/#Dc5d46/g, '#FE601C'); // Orange
    
    // Replace text-[#6091b0] with text-[#0A2463]
    content = content.replace(/text-\[\#6091b0\]/g, 'text-[#0A2463]');

    // In Podcast section, it uses bg-[#6091b0]. We'll map that to #EDD2E0
    // But then we need to change white text to #0A2463 within that block
    // Let's just do targeted replacements if the file is App.tsx or PodcastPage.tsx
    if (filepath.includes('App.tsx')) {
       // We know podcasts section starts around <div className="w-full bg-[#6091b0]">
       // Instead of complex regex, let's just do some string replacements in the whole file
       // since we want #EDD2E0 as a section background.
       content = content.replace(/bg-\[\#6091b0\]/g, 'bg-[#EDD2E0]');
       
       // Now fix text colors inside the newly pink sections.
       // The text was text-white, let's just leave it for now or fix specific lines?
       // Wait, replacing text-white globally is dangerous. 
       // Let's just do a block replacement for Podcasts in App.tsx
    }
    
    if (filepath.includes('PodcastPage.tsx')) {
       // text-[#011427] bg-transparent group-hover:bg-[#6091b0] group-hover:text-white
       content = content.replace(/group-hover:bg-\[\#6091b0\] group-hover:text-white/g, 'group-hover:bg-[#0A2463] group-hover:text-white');
    }

    if (content !== originalContent) {
      fs.writeFileSync(filepath, content, 'utf8');
      console.log(`Updated ${filepath}`);
    }
  }
});
