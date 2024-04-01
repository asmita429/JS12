// JSON 
// accessing data from JSON

// JSON.parse(data) method to parse a string data into a JS obj
// JSON.stringify(json) method to parse a js obj data into json

let jsonRes = 
    '{"fact":"A group of cats is called a clowder.","length":38}';

// console.log(jsonRes);

let validRes = JSON.parse(jsonRes);
console.log(validRes);

let student = {
    name: "asmita",
    year: 2080
};

// console.log(JSON.stringify(student));

// testing API request 
// tools: postman, hoppscoth.io

// Ajax: asynchronous javascript and xml

// js -> req -> api -> res -> js :it works asynchronously

// http verbs: GET, POST, DELETE
// get res information, post data with api req, delete somethig

// Status code: response from api
// 200-ok, 404-api not found, 400-bad request, 500-internal server error

// HTTP response status code mdn
// informational responses(100-199)
// successful responses(200-299)
// redirection messages(300-399)
// client error responses(400-499)
// server error responses(500-599)

// Add information in URLs 
// 1.query string:  https://www.something.com?name=asmita&age=24
// https://www.google.com/search?q=bible 
// 2. .../:id is a variable in api requests

// practice: harry-potter api, university api(http://universities.hipolabs.com)

// 3.HTTP headers: sending headers in api request
// supply additional info in req & res
// accept content type: text/plain, html, 


// First request; using fetch

// // fetch(url)
// let url = "https://catfact.ninja/fact";

// fetch(url); //returns promise
// inspect-network-name-headers/previews

// // first req
// fetch(url)
// .then((res) => {
//     // console.log(res);
//     // body:ReadableStream, read data
//     // console.log(res.json()); //promise-obj-fact: readable data fact

//     // res.json().then ((data) => {
//     //     console.log(data);
//     // });

//     // method chaining
//     return res.json();
// })
// .then((data) => {
//     console.log(data.fact);
//     // second req
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log(data2.fact);
// })
// .catch( (err) => {
//     console.log("Error-", err);
// });     //response{...}


// Fetch request with async/await
let url = "https://catfact.ninja/fact";

async function getFacts() {
    // if error occurs
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (e) {
        console.log("error:", e);
    }
    console.log("remianing code");
}

console.log(getFacts()); //promise{undefined}, use await
