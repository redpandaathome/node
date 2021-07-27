function hello(){
   console.log(this);
   console.log(this === global);
}

hello();

class A {
   constructor(num){
      this.num = num;
   }
   memberFunction(){
      console.log('---class---');
      console.log(this); //class 자기자신
      console.log(this === global);

   }
}

const temp = new A(7);
temp.memberFunction();

console.log('---global scope---')
console.log(this)
console.log(this === module.exports);