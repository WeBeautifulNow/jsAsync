// 以下的代码大家可能一般情况都不会写，但是一百次中疏忽一次也是令人困惑的bug
// 不知道被同步调用还是异步调用，难以掌控
function authentication(callback) {
    if (!name || !password) {
        callback();
        return;
    }
    MsPortalFx.ajax("auth", { name, password }, callback);
}

// 我们把pay的控制权交给第三方paypal.purchase函数，这让我们的回调“任人宰割”
paypal.purchase(purchaseData, function () {
    pay();
});

//如果paypal出bug多次调用
let alreadyPaid = false;
if (!alreadyPaid) {
    pay();
    alreadyPaid = true;
} else {
    alert();
}

//如果调用太慢或者不调用
//...
