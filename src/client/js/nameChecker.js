const checkName = (url) => {
    const run = url.match(/^(http|https):\/\/[^ "]+$/);
    return run.test(url);
}

export { checkName }