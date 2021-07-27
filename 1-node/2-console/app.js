console.log("logging......")
console.clear()

//log level -browser에선 highlight됌, node에서는 library써야
//서버에 배포했을 때 로그의 심각성에 따라 확인하고 싶을 땐 걸러내는데 쓰기 좋음. 출력할 건지 파일에 넣을건지 등
console.log('log') //개발
console.info('info') //정보
console.warn('warn') //경보
console.error('error') //에러, 사용자 에러, 시스템 에러

//assert - 참이 아닌 경우에만 출력
console.assert( 2===3, 'not same!');
console.assert( 2===2, 'same!');

//print object
const student = {name: 'yum', age: 5, company: {name:'AC'}};
console.log(student)
console.table(student)
console.dir(student), {showHidden: true, colors: false, depth:2};

//measuring time
console.time('for loop');
for( let i =0; i<10; i++){
   i++;
}
console.timeEnd('for loop');

//counting
function a(){
   console.count('a function');
}
a();
console.countReset('a function')
a();

//trace - debugging 🐛👏🏼
function f1(){
   f2();
}

function f2(){
   f3();
}

function f3(){
   console.log('f3');
   console.trace();
}

f1();