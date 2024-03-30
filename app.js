// Async function

// It returns promise. we can apply methods(then,catch) to returned promise.

async function greet() {
    throw "404 page not found";
    return "hello";
}

greet()
.then( (result) => {
    console.log("promise was resolved");
    console.log("result", result);
})
.catch( (err) => {
    console.log("promise rejected. err: ", err);
})

// arrow function with async
// let demo = async () => {
//     return 5;
// }; 
// console.log(demo()); //returns promise with value 5


// await keyword pauses the execution of its surrounding async function until 
// the promise is settled(resolved or rejected)

function getNum() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            let num = Math.floor(Math.random() *10) + 1;
            console.log(num);
            resolve(); //if we do not set resolve, then promiseState becomes pending
        }, 1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    getNum();
}

console.log(demo());


// very very useful code. learn more!!
let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             h1.style.color = color;
//             console.log(`color changed to ${color}`);
//             resolve("color changed");
//         }, delay);
//     });
// }

// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     changeColor("blue", 1000);
// }


// handling rejections with Await
// if any of the promise gets rejected !
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num >3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        }, delay);
    });
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
    } catch(err) {
        console.log("error caught: ", err);
    }

    let a = 5;
    console.log(a);
    console.log("new number = ", a+3);
}