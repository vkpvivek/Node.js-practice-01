//console.log("hello world");


//arrow fuction
        // var a=10;
        // var b=20;
        // const mul=(a,b)=> a*b;
        //console.log(mul(a,b));

//object
        // const student={
        //     name:'Amar',
        //     age:21,
        //     course:'B.tech',
        //     details(){
        //         console.log('this is '+this.name+", age: "+this.age+" in course "+this.course);
        //     }
        // }
        //student.details();

//object destructuring
        // const {name, age, course}= student;
        // console.log(name,age,course);

//
        // const arr=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
        // const newArr=arr.map((item)=>{
        //     return item ===' ' ? 'empty string': item;
        // })
        // console.log(newArr);


//Async & Await //and  Promises
function  Delay(message,time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },time);
    });
}

async function print(){
    console.log('a');
    console.log('b');
    await Delay('c',3000);
    await Delay('d',0);
    console.log('e');
}

print();

 