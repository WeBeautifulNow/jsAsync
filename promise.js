let resolveHandle = (str) => console.log(str);
let rejectHandle = () => { throw Error };

let friedSteak = () => new Promise((resolve, reject) => {
    console.log("start cooking steak");
    setTimeout(() => resolve("steak done"), 2000);
}).then(resolveHandle); // callback to chain

let washVegetable = () => new Promise((resolve, reject) => {
    console.log("start washing vegetable");
    setTimeout(() => resolve("washing done"), 500);
}).then(resolveHandle);

let cookVegetable = () => new Promise((resolve, reject) => {
    console.log("start cooking vegetable");
    setTimeout(() => resolve("vegetable done"), 1000);
}).then(resolveHandle);

let eat = () => new Promise((resolve, reject) => {
    console.log("start enjoying dinner");
    setTimeout(() => resolve("I am full. (¯√¯)"), 10000);
}).then(resolveHandle);

function dinner() {
    Promise.all([friedSteak(), washVegetable()])
    .then(() => cookVegetable())
    .then(() => eat())
}

dinner();