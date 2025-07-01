class RequestData {
    method: string;
    url: string;
    version: string;
    message: string;
    //response?: string;
    fulfilled: boolean;

    constructor(method: string, url: string, version: string, message: string,){ //response?: string) {
        this.method = method;
        this.url = url;
        this.version = version;
        this.message = message;
        //this.response = response;
        this.fulfilled = false;
    }
}

const resultt = new RequestData('GET', 'https://api.example.com/data', 'HTTP/1.1', 'Request successful');
console.log(resultt)