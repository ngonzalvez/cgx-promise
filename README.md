# cgx-promise

This is a minimal implementation of a Promise in Javascript.

## Why using this library?

It's simple: because it weights 413 bytes.

If you're looking for a Promise library with lots of functionalities, you are in the wrong place. However, if you need just a simple Promise library and don't want to add several kilobytes to your already big enough bundle, then this is it.


## Usage

~~~javascript
function myAsyncFunc() {
    const promise = new Promise();

    someAsyncCode((err, data) => {
        if (err) {
            promise.reject(err);
            return;
        }

        promise.resolve(data);
    })

    return promise;
}


myAsyncFunc()
    .then(data => console.log(data))
    .catch(err => console.log('An error occurred:', err));
~~~


## What does this library supports?

* Multiple then() which will be executed in the same order they are declared.
* The catch() method will catch any call to reject() or any exception raised by a then().
* Methods are chainable like in the example above.
