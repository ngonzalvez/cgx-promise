/**
 * Light-weight implementation of thee promise pattern.
 */
var Promise = function() {
    /**
     * Then callbacks.
     */
    this._t = [];

    /**
     * Catch callbacks.
     */
    this._c = [];

    /**
     * Callbacks context.
     */
    this._o = {};
};

/**
 * Shortcut to reduce the final size of the minified code.
 */
var P = Promise.prototype;


/**
 * Resolve the promise.
 */
P.resolve = function() {
    var args = arguments,
        promise = this;

    try {
        for (var i = 0, l = promise._t.length; i < l; i++) {
            args = [promise._t[i].apply(promise._o, args)];
        }
    } catch(err) {
        // If there are no catch callbacks re-throw the error.
        if (!promise._c.length) {
            throw err;
        }

        promise.reject(err);
    }
};


/**
 * Reject the promise with an error.
 *
 * This method calls all the catch callbacks passing them th error object.
 *
 * @param {Object} err  The error data objcct.
 */
P.reject = function(err) {
    for (var i = 0, promise = this, l = promise._c.length; i < l; i++) {
        promise._c[i].call(promise._o, err);
    }
};


/**
 * Add a callback for the promise resolution.
 *
 * @param {Function} cb Callback function.
 */
P.then = function(cb) {
    this._t.push(cb);
    return this;
};


/**
 * Add an error handlere.
 *
 * @parma {Function} cb Callback function.
 */
P.catch = function(cb) {
    this._c.push(cb);
    return this;
};
