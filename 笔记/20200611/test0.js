async function foo () {
    return Promise.resolve(123)
}

foo().then(res => console.log(res))