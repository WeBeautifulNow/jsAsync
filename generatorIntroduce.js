function* gen(x) {
    let y = yield x + 2;
    console.log('y', y)
    return y;
}

let g = gen(1);
console.log(g.next()); // { value: 3, done: false }
console.log(g.next()); // { value: undefined, done: true }
// let firstValue = g.next().value;
// console.log(g.next(firstValue));