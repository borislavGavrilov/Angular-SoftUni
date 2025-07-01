class Data {

    method: string;
    url: string;   
    version: string;
    message: string;
    response: string | undefined
    fullfilled: boolean;

    constructor(method: string, url: string, version: string, message: string, response?: string) {
        this.method = method;
        this.url = url;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fullfilled = false;
    }
}

const result = new Data('GET', 'https://api.example.com/data', 'HTTP/1.1', 'Request successful');
console.log(result);
