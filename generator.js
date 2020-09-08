let resolveHandle = (str) => console.log(str);
let rejectHandle = () => {
    throw Error;
};

let friedSteak = () =>
    new Promise((resolve, reject) => {
        console.log("start cooking steak");
        setTimeout(() => resolve("steak done"), 2000);
    });
let washVegetable = () =>
    new Promise((resolve, reject) => {
        console.log("start washing vegetable");
        setTimeout(() => resolve("washing done"), 500);
    });
let cookVegetable = () =>
    new Promise((resolve, reject) => {
        console.log("start cooking vegetable");
        setTimeout(() => resolve("vegetable done"), 1000);
    });

let eat = () =>
    new Promise((resolve, reject) => {
        console.log("start enjoying dinner");
        setTimeout(() => resolve("I am full. (¯√¯)"), 10000);
    });

let dinnerArr = [
    () => Promise.all([friedSteak(), washVegetable()]),
    cookVegetable,
    eat,
];
// let dinnerArr = [friedSteak, washVegetable, cookVegetable, eat];
function dinner() {
    function* genDinner() {
        for (let dinnerStep of dinnerArr) {
            yield dinnerStep();
        }
    }
    let execuator = genDinner();
    let getResult = () => {
        let result = execuator.next();

        // while (!result.done) {
        //     result.value.then((value) => resolveHandle(value));
        // }
        if (result.done) {
            return;
        }
        result.value.then((value) => {
            resolveHandle(value);
            getResult();
        });
    };
    getResult();
}
dinner();
