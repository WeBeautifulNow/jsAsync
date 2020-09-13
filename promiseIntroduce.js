var promise = new Promise(function (resolve, reject) {
    console.log("inner promise"); // 1
    resolve(42);
    // reject(1);
});
promise.then(
    function (value) {
        console.log(value); // 3
    },
    function (value) {
        console.log(`reject for number ${value}`); // 3
    }
);
console.log("outer promise"); // 2

//why always async?

// setTimeout(() => {
//     promise.then((value) => console.log(`always async although I got number ${value} already`));
//     console.log("outer promise 2")
// }, 1000)
