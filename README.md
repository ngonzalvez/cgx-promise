# cgx-promise

This is a minimal implementation of a Promise in Javascript.

## Why using this library?

It's simple: because it weights 413 bytes.

If you're looking for a Promise library with lots of functionalities, you are in the wrong place. However, if you need just a simple Promise library and don't want to add several kilobytes to your already big enough bundle, then this is it.


## Installation

**Bower**
```
bower install cgx-promise
```


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
* The value returned by a then() will be the first argument for the next then().
* Shared context for all then(). That is, if you store something in the "this" reference in a then(), it will be available next then().


## FAQ

#### Why isn't this library available for node.js?
Well, this library is designed not to be fully-featured just to save space, which is a really valuable asset in front-end web development. However, if you are working with node.js, then you don't have to download the libraries each time you execute the code or each time a new request arrives. Therefore, since you don't have that restriction, I would advice you to use a full-featured promise library instead.


## Sugestions & requests

If you have any suggestions on how to improve this library or a feature that you consider should be part of this library, please create a new issue to discuss it. If we decide that it should be part of the library, I will gladly implement it.
