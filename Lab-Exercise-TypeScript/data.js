var Data = /** @class */ (function () {
    function Data(method, url, version, message, response) {
        this.method = method;
        this.url = url;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fullfilled = false;
    }
    return Data;
}());
var result = new Data('GET', 'https://api.example.com/data', 'HTTP/1.1', 'Request successful');
console.log(result);
