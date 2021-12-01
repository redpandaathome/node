const fs = require('fs').promises;
// orders will not be guaranted because we are using promises here
// if orders matter, use then
// all promises should use catch!

// read a file ✨✨✨without encoding 'utf8' -> <Buffer 68 65 6c 6c 6f>
fs.readFile('./file.txt', 'utf8')
   .then((data)=>console.log(data))
   // catch((x)=>console.error(x)) === below
   .catch(console.error);

// writing a file
// : Promise<void>; -> ✨return nothing -> no need to use then()
// but don't forget to catch err!
fs.writeFile('./text.txt', 'Hello kity') // <- to prevent auto formatting
   .catch(console.error);

// overlapping problem like (hellow kity-> meowo kity)
// fs.writeFile('./text.txt', 'meow') // <- to prevent auto formatting
//    .catch(console.error);

// to add more text...
fs.appendFile('./text.txt', 'meow meow!')
   .then(()=>{
      fs.copyFile('./text.txt', './text-copy.txt')
         .catch(console.error);
   })
   .catch(console.error);

// copy -> empty file??? sync problem ✨ -> then... like above
// fs.copyFile('./text.txt', './text-copy.txt')
//    .catch(console.error);

//folder
fs.mkdir('sub-foldder')
   .catch(console.error);

fs.readdir('./') // based on current directory
   .then(console.log) // since readdir returns : Promise<string[]>;
   .catch(console.error);