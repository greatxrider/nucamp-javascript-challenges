const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

function buyTicket() {
    let customerAge = prompt("Please enter your age:");
    let ticketcost = getBaseTicketCost(customerAge);
    alert(ticketcost);
}

function getBaseTicketCost(age) {
    let discTicketCost;
    const isMatinee = confirm("Are you attending a matinee show?");
    if (isMatinee) {
        if (age <= 12 || age >= 65) {
            discTicketCost = CHILD_AND_SENIOR_TICKET_COST - MATINEE_DISCOUNT;
            return discTicketCost;
        } else if (age >= 12 || age <= 65) {
            discTicketCost = GENERAL_ADMISSION_TICKET_COST - MATINEE_DISCOUNT;
            return discTicketCost;
        }
    } else {
        if (age <= 12 || age >= 65) {
            return CHILD_AND_SENIOR_TICKET_COST;
        } else if(age >= 12 || age <= 65) {
            return GENERAL_ADMISSION_TICKET_COST
        }
    }
}

document.getElementById('purchaseButton').addEventListener('click', function() {
    document.getElementById('ticketForm').style.display = 'block';
});
