//console.log("hello world");
var a=10;
var b=20;

//arrow fuction
const mul=(a,b)=> a*b;
console.log(mul(a,b));

//object
const student={
    name:'Amar',
    age:21,
    course:'B.tech',
    details(){
        console.log('this is '+this.name+", age: "+this.age+" in course "+this.course);
    }
}

student.details();