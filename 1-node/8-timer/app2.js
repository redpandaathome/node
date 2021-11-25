console.log('code1');
console.time('timeout 0');

// waits till "call stack" gets empty
setTimeout(()=>{
   console.timeEnd('timeout 0');
   console.log('setTimeout 0');
}, 0)

// setTimeout takes more time...(waiting for "call stack" to be empty)
for(let i = 0; i<100; i++){

}

// console.log('code2');
// setImmediate(()=>{
//    console.log('setImmediate');
// })

// console.log('code3');
// process.nextTick(()=>{
//    console.log('nextTick');
// })


// // code1
// // code2
// // code3
// // nextTick
// // setTimeout 0
// // setImmediate