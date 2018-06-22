allTickets = 1000000;
luckyTickets = 0;

generateTicekts = () => {
    for(let i=0; i<allTickets; i++){
        if(checkIfTicketLucky(i))
            luckyTickets++;
    }
    return luckyTickets;
};

checkIfTicketLucky = (num) => {
    first = 0, second = 0;
    for(let x = 0; x < 6; x++){
        buf = num;
        buf = parseInt(buf / Math.pow(10, x)) % 10;
        
        if(x<3) first += buf;
        else second += buf;
    }
    return first === second ? true : false;
};


console.log(generateTicekts());

result = (generateTicekts() / allTickets);
console.log(result);
