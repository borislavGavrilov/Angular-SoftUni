var Tickets = /** @class */ (function () {
    function Tickets(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Tickets;
}());
function ticketManagment(input, sortingCriteria) {
    var tickets = input.map(function (line) {
        var _a = line.split('|'), destination = _a[0], price = _a[1], status = _a[2];
        return new Tickets(destination, Number(price), status);
    });
    return tickets.sort(function (a, b) {
        var criteriaA = a[sortingCriteria];
        var criteriaB = b[sortingCriteria];
        if (typeof criteriaA === 'string' && typeof criteriaB === 'string') {
            return criteriaA.toString().localeCompare(criteriaB.toString());
        }
        else if (typeof criteriaA === 'number' && typeof criteriaB === 'number') {
            return criteriaA - criteriaB;
        }
        return 0;
    });
}
var input = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'Boston|126.20|departed',
];
var sortingCriteria = 'price';
var ticketResults = ticketManagment(input, sortingCriteria);
console.log(ticketResults);
