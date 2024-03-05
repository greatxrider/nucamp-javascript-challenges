const pet = {
    //add properties here
    name: 'Buddy', 
    age: '5', 
    type: 'Dog'
};

function describePet(pet) {
    //return a string that uses a template literal to string together all of a pet's properties into one descriptive sentence.
    const description = `${pet.name} is a ${pet.age}-year-old ${pet.type} who loves to play and cuddle.`
    return description;
}

console.clear();
console.log(describePet(pet));
