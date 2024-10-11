/*
 * What is asyn?
 * what is await/
 *  How async await works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch
*/


const promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise Resolved Value!") },5000)
   
})
const promise2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise Resolved Value!") },10000)
   
})
// // this async always returns a promise 
// async function getData(){
//     return promise;
// }

// const dataPromise = getData();
// dataPromise.then(res=>console.log(res))


// async/await
// await can only be used inside an async function
// Js Engine was waiting for promise to resolve
// async function handlePromise(){
//     console.log("Hello World!");
    
//    const value =  await promise;
//    console.log("Namaste JavaScript1")
//    console.log(value);

//     const value1 =  await promise2;
//     console.log("Namaste JavaScript2")
//     console.log(value1);
//  }
 

// handlePromise();

// function getData(){
//     // Js Engine will not wait for promise to be resolved
//     promise.then((res)=>console.log(res))

//     console.log("Namaste JavaScript");
    
// }
// getData();


// fetch() =>Response


const API_URL = "https://api.github.com/users/akshaymarch7";

// await can only be used inside an async function
async function apicall(){
    try{
    const data = await fetch(API_URL);

    const jsonValue = await data.json();
    console.log(jsonValue);
    }
    catch(err){
        console.log("Message : ","U Have done smething mistake in your code please check and tryagain")
    }

}
apicall()
