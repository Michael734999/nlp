const checkName = (url) => {
    const run = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return run.test(url);
}

export { checkName }