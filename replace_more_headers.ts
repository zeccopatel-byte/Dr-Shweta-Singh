import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Section headers
content = content.replace(/className="font-serif text-2xl sm:text-3xl text-\[\#0A2463\]"/g, 'className="font-serif text-2xl sm:text-3xl text-[#FE601C]"');

fs.writeFileSync('src/App.tsx', content);

['src/pages/BlogPage.tsx', 'src/pages/BookPage.tsx', 'src/pages/PodcastPage.tsx'].forEach(file => {
    let pageContent = fs.readFileSync(file, 'utf8');
    pageContent = pageContent.replace(/className="font-serif text-2xl sm:text-3xl text-\[\#0A2463\]"/g, 'className="font-serif text-2xl sm:text-3xl text-[#FE601C]"');
    fs.writeFileSync(file, pageContent);
});
