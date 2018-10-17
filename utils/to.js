/**
* @author Aécio Levy
* @function to
* @usage: Use async/await with catch
* @param { Promise }
* @summary: Based on https://github.com/scopsy/await-to-js
*/
module.exports = promise => promise
    .then(data => [null, data])
    .catch(err => [err, null]);
