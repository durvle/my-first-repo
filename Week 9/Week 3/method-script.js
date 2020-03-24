// method = function stored in an object
// - deals with information already in the object
// const human ={
//     name:'Bethany',
//     age: 88,
//     height:160,
//     getHeightInInches: function(){
//         return human.height * 0.393701
//     }
//     getHeightInFeet: function(){
//         return (human.height * 0.393701) / 12
//     }
// }

// const planet = {
//     name: 'Neptune',
//     radius: 24622,
//     fromSun: 8,
//     getDiameter: function() {
//       return planet.radius * 2;
//     },
//     getDiameterInM: function(diameter) {
//       return diameter * 1000;
//     }
//   }

//   console.log(`The planet ${planet.name} is ${planet.fromSun} planets away from the sun and has a diameter of${planet.getDiameter()}`)
//   Which of these options will print the following sentence: The planet Neptune is 8 planets from the sun, and has a diameter of 49244km (49244000 m).


// const myBookshelf = {
//     books:79,
//     buyABook: function(){
//         // this.books += 1
//         // this.books = this.books +1;
//         return this.this.books
//     }
// }
// myBookshelf.books = 80;


const warrior = {
    equipment: 'shield',
    energy:200,
    location:{
        x:0,
        y:0
    },
    walk:(changeX, changeY) =>{
        this.location.x = changeX + this.location.x
        this.location.y = changey + this.location.y
    },
    strike: (energy)=>{
        this.energy = this.energy - energy;
    },
    switchEquipment: (newEquipment) =>{
        this.equipment = newEquipment;
    }
}