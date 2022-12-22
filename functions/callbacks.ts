function myCallBack(text: string) {
    console.log('Inside Mycallback :', text);
}

function callingFunction(initialText: string, callback: (text: string) => void) {
    callback(initialText);
}

callingFunction("myText", myCallBack);


function myback(text: string) {
    console.log('Inside My Call Back :', text);
}


function call(name: string, myback: (text: string) => void) {
    myback(name)
}

call('Abdullah', myback)