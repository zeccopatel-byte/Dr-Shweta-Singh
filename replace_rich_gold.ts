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
    let newContent = content.replace(/text-rich-gold/g, 'text-[#0A2463]');
    if (newContent !== content) {
      fs.writeFileSync(filepath, newContent, 'utf8');
      console.log(`Updated ${filepath}`);
    }
  }
});
