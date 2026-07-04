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
  { from: /border-\[\#0A2463\]/g, to: 'border-[#EDD2E0]' },
  { from: /ring-\[\#0A2463\]/g, to: 'ring-[#EDD2E0]' },
];

walkDir('./src', function(filepath) {
  if (filepath.endsWith('.tsx') || filepath.endsWith('.ts') || filepath.endsWith('.css')) {
    let content = fs.readFileSync(filepath, 'utf8');
    let original = content;
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    // In CSS
    if (filepath.endsWith('index.css')) {
      content = content.replace(/border: 2px solid #0A2463;/g, 'border: 2px solid #EDD2E0;');
      content = content.replace(/border: 2px dashed #0A2463;/g, 'border: 2px dashed #EDD2E0;');
    }
    
    if (content !== original) {
      fs.writeFileSync(filepath, content, 'utf8');
      console.log(`Updated ${filepath}`);
    }
  }
});
