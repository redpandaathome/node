const fs = require('fs')
console.log(global);

global.hello = ()=>{
   // global.console.log('hello') - same!
   console.log('hello');
}

global.hello();
hello();

//browser에서 global은 window
//node에서 global은 global
//console.log도 사실 global.console.log
//global + cmd-click 해서 어떤 클래스, 전역변수, 메소드가 있는지 확인