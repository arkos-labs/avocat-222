const fs = require('fs');
const path = require('path');

const constantsPath = path.join(__dirname, 'src', 'lib', 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const images = ['/images/justice_scales.jpg', '/images/courthouse.jpg', '/images/gavel.jpg'];

let imgIndex = 0;
// Match line with id: "something", and insert imageUrl on the next line
const ids = ['urgences-penales','penal-travail','penal-famille','mineurs','penal-affaires','penal-routier','terrorisme','presse','sante','execution-peine','fichiers','disciplinaire','victimes'];

for (const id of ids) {
    const imgUrl = images[imgIndex % images.length];
    imgIndex++;
    
    const regex = new RegExp(`(id:\\s*"${id}",)`);
    content = content.replace(regex, `$1\n    imageUrl: "${imgUrl}",`);
}

const blogImages = ['/images/law_books.jpg', '/images/justice_scales.jpg', '/images/gavel.jpg'];
let blogIndex = 0;
const blogIds = ['1', '2', '3'];

for (const id of blogIds) {
    const imgUrl = blogImages[blogIndex % blogImages.length];
    blogIndex++;
    
    // For blog posts the id is "1", "2", "3"
    const regex = new RegExp(`(id:\\s*"${id}",\\s*slug:.*)`);
    content = content.replace(regex, `$1\n    imageUrl: "${imgUrl}",`);
}

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Constants file updated with images successfully.');
