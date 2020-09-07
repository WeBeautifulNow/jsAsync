let cb_creator = (delay) => (cb) => setTimeout(cb, delay);

let cb_1 = cb_creator(Math.random(1000));

let cb_2 = cb_creator(Math.random(1000));

let end_cb = () => console.log("done");

let mock_promise_all = (cbs, end_cb) => {
    let finishCount = 0;
    const checker = (index) => {
        finishCount++;
        console.log(`element ${index + 1} has resolved!`);
        if (finishCount === cbs.length) {
            console.log("All dependencies are ready!");
            end_cb();
        }
    }
    cbs.forEach((cb, index) => cb(() => checker(index)));
}

mock_promise_all([cb_1, cb_2], end_cb);