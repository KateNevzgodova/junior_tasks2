
// function sum(a,b) {
//     let summa =0;
//     summa=a+b;
//     console.log(summa);
// }
// sum(2,5);
// sum(4,90);
// sum(10,500);

// .....................
// function sum1() {
//     let sum =0;
//     for (let i = 0; i < arguments.length; i++) {
//        sum+=arguments[i];
        
//     }
//     console.log(sum);
// }
// sum1(2,5);
// sum1(4, 90, 4,3, 35, 6, 23, 354, 24, 4 );
// sum1(10, 500, 24);
// ----------------------

// Kate, 3656
// function show(h) {
//     console.log(h);
// }
// function showb(b) {
//      console.log(b);

// }
// function hey(name,callback) {
//     let h = "Hi,"+name+"!";
//     callback(h);
// }
// function bye(name,callback) {
//     let b = name+",bye!";
//     callback(b);
// }

// function logGreating(sec , name) {

//     console.log("Hello, " + name)
//     setTimeout(() => {
//         console.log("Bye, " + name)
//     }, sec);
// }

// function myFunc(name, sec, callback) {
//     callback(sec, name)
// }

// myFunc("Kate", 2000, logGreating);

// // ---------------
// function checkMale(a){
//    console.log(a);
// }
// function myFunc2(name, sex, callback) {
//     let a="";
//     if(!sex){
//      a = "You are man, "+name;
//     }else{
//         a = "You are women, "+name;
//     }
//     callback(a);
// }

// myFunc2("Kate", true, checkMale);
// myFunc2("Petr", false, checkMale);


//.................................


// function summa(a,b) {
//     return a+b;
// }

// const sum1 = summa(2,50);
// const sum2 = summa(4,88);

// // a + b
// console.log(sum1, sum2)

//----------------------------

function calcSumm(a) {
    return function summ(b) {
        return a+b;
    }
}

const summ = calcSumm(3)(4)

console.log(summ)

function calculateСalories(gender, height) {
    let result = gender === 'man' ? (height - 100) * 20 : (height - 105) * 19;
    if (typeof arguments[2] === 'number') {
      result *= arguments[2];
    }
    // округление
    return result.toFixed(0);
  }
  console.log(`Оптимальное кол-во ккал: ${calculateСalories('man', 185)}`);
  console.log(`Оптимальное кол-во ккал: ${calculateСalories('woman', 168, 1.2)}`);
  console.log(`Оптимальное кол-во ккал: ${calculateСalories('woman', 168)}`); 

  // -------------------

  