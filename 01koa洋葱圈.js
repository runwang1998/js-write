const middleware = []
let mw1 = async function (ctx, next) {
    console.log("1-start")
    await next()
    console.log("1-end")
}
let mw2 = async function (ctx, next) {
    console.log("2-start")
    await next()
    console.log("2-end")
}
let mw3 = async function (ctx, next) {
    console.log("3")
}

function use(mw) {
    middleware.push(mw);
}

function compose(middleware) {
    return (ctx) => {
        return dispatch(0);
        function dispatch(i) {
            const fn = middleware[i];
            if (!fn) return;
            return fn(ctx, dispatch.bind(null, i + 1));
        }
    }
}

use(mw1);
use(mw2);
use(mw3);

const fn = compose(middleware);

fn(123);
