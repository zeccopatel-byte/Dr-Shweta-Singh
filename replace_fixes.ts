import fs from 'fs';

// Fix footer in App.tsx
let appContent = fs.readFileSync('src/App.tsx', 'utf8');
appContent = appContent.replace(
  /<footer className="w-full bg-\[\#FE601C\] text-white/g,
  '<footer className="w-full bg-[#0A2463] text-white'
);
fs.writeFileSync('src/App.tsx', appContent);

// Fix BlogPage category buttons
let blogContent = fs.readFileSync('src/pages/BlogPage.tsx', 'utf8');
blogContent = blogContent.replace(
  /"bg-\[\#FE601C\] text-white hover:bg-\[\#0A2463\]"/g,
  '"bg-[#0A2463]/5 text-[#0A2463] hover:bg-[#0A2463] hover:text-white"'
);
fs.writeFileSync('src/pages/BlogPage.tsx', blogContent);

