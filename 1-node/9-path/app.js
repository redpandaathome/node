const path = require('path');

// 🚨 aware of differences by OS
// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\myfile.html'

console.log(__dirname);
// /Users/yumi/Documents/projects/node/1-node/9-path
console.log(__filename);
// /Users/yumi/Documents/projects/node/1-node/9-path/app.js


// path separator
console.log(path.sep);
// /
//environment variable separator
console.log(path.delimiter);
// :

// basename
console.log(path.basename(__filename));
// app.js
console.log(path.basename(__filename, '.js'));
// app

// dirname
console.log(path.dirname(__filename))
// /Users/yumi/Documents/projects/node/1-node/9-path

// extension
console.log(path.extname(__filename));
// .js

const parsed = path.parse(__filename);
console.log(parsed);
// {
//    root: '/',
//    dir: '/Users/yumi/Documents/projects/node/1-node/9-path',
//    base: 'app.js',
//    ext: '.js',
//    name: 'app'
//  }

const str = path.format(parsed);
console.log(str);
// /Users/yumi/Documents/projects/node/1-node/9-path/app.js

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); //ture
console.log('isAbsolute?', path.isAbsolute('../')); //false

// normalize
console.log(path.normalize('./folder/////sub'));

// join 🚨
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));