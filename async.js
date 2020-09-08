const delay = (duration) => 
    new Promise(resolve => setTimeout(resolve, duration));

let friedSteak = async() => {
    console.log("start cooking steak");
    await delay(2000);
    console.log("steak done");
};

let washVegetable = async() => {
    console.log("start washing vegetable");
    await delay(500);
    console.log("washing done");
};

let cookVegetable = async() => {
    console.log("start cooking vegetable");
    await delay(1000);
    console.log("vegetable done")
};

let eat = async() => {
    console.log("start enjoying dinner");
    await delay(10000);
    console.log("I am full. (¯√¯)");
};

async function dinner() {
    await Promise.all([friedSteak(), washVegetable()]);
    await cookVegetable();
    await eat();
}

dinner();
