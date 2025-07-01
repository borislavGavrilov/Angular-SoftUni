class Ticket{
    constructor(public destination:string,
                public price:number,
                public status:string){ 
        

    }
}

function ticketManagement(input: string[], sortingCriteria: string): Ticket[] {
    const tickets = input.map(line => {
        const [destination, price, status] = line.split('|');
        return new Ticket(destination, Number(price), status);
    });

    return tickets.sort((a, b) => {
        const criteriaA = a[sortingCriteria];
        const criteriaB = b[sortingCriteria];
        
        if (typeof criteriaA === 'string' && typeof criteriaB === 'string') {
            return criteriaA.toString().localeCompare(criteriaB.toString());
        } else if (typeof criteriaA === 'number' && typeof criteriaB === 'number') {
            return criteriaA - criteriaB;
        }
        return 0;
    });
}

const ticketInput = [
    'Philadelphia|94.20|available', 
    'New York City|95.99|available',
    'Boston|126.20|departed',]

const sortCriteria = 'price';

const ticketResultsSorted = ticketManagement(ticketInput, sortCriteria);
console.log(ticketResultsSorted);