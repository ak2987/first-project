//console.log("Hello, World!");
// console.log("This is the first JavaScript file for Day 1.");
// let x=false;
// console.log(Number(x));
// let account_balance = 1000;
// console.log(Number(account_balance));
// let x3=null;
// console.log(Number(x3));

// let object={
//     name: "John",
//     age: 30,
//     isActive: true
// }
// console.log(object);
let nums =[2,4,5,7,8,3,10,11,53,23];
let result= nums.reduce( (max, el) => {
    if(el>max){
        return el;
    }else{
        return max;
    }   
});