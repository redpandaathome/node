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
