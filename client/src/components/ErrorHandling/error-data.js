export const onError = (error) => {
    // TODO: log error to error reporting service here?
    console.log("error: " + error);

    /////////////////////////////////////////          HANDLE ERROR HERE          /////////////////////////////////////////
    if (window.api !== undefined) {
        window.api.send('toContainer', 'close-container');
    }
};
