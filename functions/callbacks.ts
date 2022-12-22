function myCallBack(text: string) {
    console.log('Inside Mycallback :', text);
}

function callingFunction(initialText: string, callback: (text: string) => void) {
    callback(initialText);
}

callingFunction("myText", myCallBack);
