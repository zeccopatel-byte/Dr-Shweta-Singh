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

    // "Dr. Shweta Singh is a researcher..." block
    content = content.replace(/className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-\[1\.2\] text-\[\#FE601C\] text-center/g, 'className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-[#0A2463] text-center');

    // Section headers
    content = content.replace(/className="font-serif text-2xl sm:text-3xl text-\[\#FE601C\]"/g, 'className="font-serif text-2xl sm:text-3xl text-[#0A2463]"');

    if (content !== original) {
      fs.writeFileSync(filepath, content, 'utf8');
      console.log(`Updated ${filepath}`);
    }
  }
});
