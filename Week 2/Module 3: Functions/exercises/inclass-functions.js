// Exercise: Create a function that takes in a name and returns a string that greets the user with their name for example: "Hello, Jamie!". Add a default parameter so that if no name is given, the program will greet the user with, "Hello, there!"

// const yourName = (name ="there") =>{
//     console.log(`Hello ${name}`)
// }
// yourName('Jamie');


// const introPet = (firstName, petType, petName = 'Snuffalufagus') => {
//     console.log(`My name is ${firstName}, and my ${petType}'s name is ${petName}'`);
// }
// const petType = prompt("Your first name is?")
// const firstName = prompt("Your pet's name is?")
// const petName = prompt("Your pet's name is?" )
// introPet(firstName, petType, petName)
// ___________
// const partyInvite = (guestName, additional = 1) => {
//     console.log(`Hi ${guestName}, you (${+additional}) are invited to the fun party!`)
// }
// partyInvite('Steve', 2)

// How can you modify this function to limit the min or max number it will return?
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}
Math.min(5), Math.max(69);

let dog = "Prudence";

const hello = () => {
  dog = "Hank";
  console.log(dog);
};
