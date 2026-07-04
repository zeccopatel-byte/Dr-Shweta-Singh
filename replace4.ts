import fs from 'fs';
import path from 'path';

function walkDir(dir: string, callback: (filepath: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const replacements = [
  { from: /#011427/g, to: '#0A2463' },
  { from: /#Dc5d46/g, to: '#FE601C' },
  { from: /text-\[\#6091b0\]/g, to: 'text-[#0A2463]' },
  { from: /bg-\[\#6091b0\]\/80/g, to: 'bg-[#EDD2E0]' }, 
  { from: /group-hover:bg-\[\#6091b0\] group-hover:text-white/g, to: 'group-hover:bg-[#0A2463] group-hover:text-white' },
];

walkDir('./src', function(filepath) {
  if (filepath.endsWith('.tsx') || filepath.endsWith('.ts') || filepath.endsWith('.css')) {
    let content = fs.readFileSync(filepath, 'utf8');
    let newContent = content;
    replacements.forEach(r => {
      newContent = newContent.replace(r.from, r.to);
    });
    if (newContent !== content) {
      fs.writeFileSync(filepath, newContent, 'utf8');
      console.log(`Updated ${filepath}`);
    }
  }
});
