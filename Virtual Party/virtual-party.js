const guests = [
    'Ayaan', 'Maria', 'Chen', 'Oliver', 'Fatima', 'Satoshi', 'Lucia', 'Kalani', 'Jamal', 'Nadia', 'Thabo'
];

const button = document.getElementById('launch-button');
button.addEventListener('click', launchParty);

function sendInvitations() {
    for (let x of guests) {
        let message = `Hey ${x}! 🎉 Guess what? You're invited to my virtual party! It's going to be` +
            `super fun and I really hope you can make it. Can't wait to hang out online! 🥳`;
        console.log(message);
    }
}

function prepareActivities() {
    let message = `The activities are ready.`
    setTimeout(() => console.log(message), 2000);
}

function virtualDanceFloor() {
    let count = 0;
    let message = `Who's ready to hit the dance floor? 🕺💃 
    Let's light it up with our moves and dance the night away! 🎶🎉`;
    let virtualDanceInvite = setInterval(() => {
        count++;
        console.log(message);
        if (count === 5) {
            clearInterval(virtualDanceInvite);
        }
    }, 1000);

}

function hostSpeech () {
    console.log("Welcome, everyone! Thrilled to have you here.");
    let message = "Welcome to the Virtual Party of Jeph!";
    setTimeout(() => console.log(message), 1500);
}

function surpriseGuest () {
    let message = "🌟 Surprise! Our special guest has just arrived! 🌟";
    setTimeout(()=>console.log(message), 3000);
}

function launchParty () {
    sendInvitations();
    prepareActivities();
    virtualDanceFloor();
    hostSpeech();
    surpriseGuest();
}
