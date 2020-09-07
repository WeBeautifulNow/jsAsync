function dinner() {
    console.log("start cooking steak");
    console.log("start washing vegetable");
    setTimeout(() => console.log("washing done"), 500);
    setTimeout(
        () => {
            console.log("steak done");
            console.log("start cooking vegetable");
            setTimeout(
                () => {
                    console.log("vegetable done");
                    console.log("start enjoying dinner");
                    setTimeout(
                        () => console.log("I am full. (¯√¯)"), 
                        10000
                    );
                }, 
                1000
            )
        },
        2000
    );
};

dinner();

// But how about racing?